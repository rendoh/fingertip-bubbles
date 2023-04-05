import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';
import GUI from 'lil-gui';

import { clock } from './clock';
import { sizes } from './sizes';

async function main() {
  const gui = new GUI();
  const vars = {
    color: '#ff0000',
    width: 2,
    showVideo: true,
    backgroundColor: '#ffffff',
    clear: clearMainCanvas,
  };
  gui.addColor(vars, 'color');
  gui.add(vars, 'width', 1, 20, 1);
  gui
    .add(vars, 'showVideo')
    .name('Show video')
    .onChange((isVisible: boolean) => {
      vCanvas.style.display = isVisible ? 'block' : 'none';
      mCanvas.style.backgroundColor = isVisible
        ? 'transparent'
        : vars.backgroundColor;
    });
  gui.addColor(vars, 'backgroundColor').onChange((color: string) => {
    if (!vars.showVideo) {
      mCanvas.style.backgroundColor = color;
    }
  });
  gui.add(vars, 'clear');

  const vision = await FilesetResolver.forVisionTasks(
    'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm',
  );
  const handLandmarker = await HandLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: '/fingertip-bubbles/hand_landmarker.task',
    },
    numHands: 2,
  });

  const videoWidth = 1280;
  const videoHeight = 720;
  const videoAspectRatio = videoWidth / videoHeight;
  const video = document.createElement('video');
  navigator.mediaDevices
    .getUserMedia({
      video: {
        width: videoWidth,
        height: videoHeight,
        aspectRatio: {
          exact: videoAspectRatio,
        },
      },
      audio: false,
    })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    });

  function createCanvas() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.style.display = 'block';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    const resize = () => {
      const { w, h, r } = sizes;
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = `${w / r}px`;
      canvas.style.height = `${h / r}px`;
    };
    resize();
    sizes.addEventListener('resize', resize);
    return {
      canvas,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ctx: canvas.getContext('2d')!,
    };
  }

  clock.addEventListener('tick', update);

  const cursor = {
    x: 0.5,
    y: 0.5,
    active: false,
    inView: false,
  };

  const { canvas: vCanvas, ctx: vCtx } = createCanvas();
  vCanvas.style.display = vars.showVideo ? 'block' : 'none';

  function drawVideo() {
    const { w, h } = sizes;
    vCtx.save();
    vCtx.scale(-1, 1);
    vCtx.translate(-w, 0);
    const windowAspectRatio = w / h;
    const { sx, sy, sw, sh } = (() => {
      if (windowAspectRatio >= videoAspectRatio) {
        const ratio = w / videoWidth;
        const sx = 0;
        const sy = (videoHeight * ratio - h) / ratio / 2;
        const sw = videoWidth;
        const sh = h / ratio;
        return { sx, sy, sw, sh };
      } else {
        const ratio = h / videoHeight;
        const sx = (videoWidth * ratio - w) / ratio / 2;
        const sy = 0;
        const sw = w / ratio;
        const sh = videoHeight;
        return { sx, sy, sw, sh };
      }
    })();
    vCtx.drawImage(video, sx, sy, sw, sh, 0, 0, w, h);
    vCtx.restore();
  }

  function lerp(x: number, y: number, p: number): number {
    return x + (y - x) * p;
  }

  function updateCursorPosition() {
    const result = handLandmarker.detect(vCanvas);
    const rightHandIndex = result.handednesses.findIndex((category) =>
      category.find((c) => c.categoryName === 'Right' && c.score > 0.8),
    );
    cursor.inView = rightHandIndex !== -1;
    if (rightHandIndex === -1) {
      cursor.active = false;
    } else {
      const rightHandLandmarks = result.landmarks[rightHandIndex];
      const [, , , , thumb, , , , index] = rightHandLandmarks;
      const ratio60 = 0.5;
      const delta60 = 16;
      const ratio = 1 - Math.pow(1 - ratio60, clock.delta / delta60);
      cursor.x = lerp(cursor.x, index.x, ratio);
      cursor.y = lerp(cursor.y, index.y, ratio);
      const distance = Math.sqrt(
        (thumb.x - index.x) ** 2 + (thumb.y - index.y) ** 2,
      );
      cursor.active = distance < (cursor.active ? 0.1 : 0.03);
    }
  }

  function updateVideoCanvas() {
    const { w, h } = sizes;
    vCtx.clearRect(0, 0, w, h);
    drawVideo();
    updateCursorPosition();
  }

  const { ctx: pCtx, canvas: pCanvas } = createCanvas();
  pCanvas.style.zIndex = '1';

  function drawPointer() {
    const { w, h } = sizes;
    const { x, y, active, inView } = cursor;
    if (!inView) return;
    pCtx.save();
    pCtx.beginPath();
    pCtx.arc(x * w, y * h, Math.max(vars.width / 2, 4), 0, Math.PI * 2);
    pCtx.fillStyle = active ? vars.color : 'black';
    pCtx.strokeStyle = active ? vars.color : 'white';
    pCtx.lineWidth = 1;
    pCtx.fill();
    pCtx.stroke();
    pCtx.restore();
  }

  function updatePointerCanvas() {
    const { w, h } = sizes;
    pCtx.clearRect(0, 0, w, h);
    drawPointer();
  }

  const { ctx: mCtx, canvas: mCanvas } = createCanvas();
  let active = false;
  function updateMainCanvas() {
    if (!cursor.active) {
      if (active) {
        active = false;
        mCtx.closePath();
      }
      return;
    }
    const { w, h } = sizes;
    mCtx.lineWidth = vars.width;
    mCtx.strokeStyle = vars.color;
    mCtx.lineCap = 'round';
    if (cursor.active && active === false) {
      active = true;
      mCtx.beginPath();
      mCtx.moveTo(cursor.x * w, cursor.y * h);
    } else {
      mCtx.lineTo(cursor.x * w, cursor.y * h);
    }
    mCtx.stroke();
  }

  function clearMainCanvas() {
    mCtx.clearRect(0, 0, sizes.w, sizes.h);
  }

  function update() {
    updateVideoCanvas();
    updatePointerCanvas();
    updateMainCanvas();
  }
}

main();
