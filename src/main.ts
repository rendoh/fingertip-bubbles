import * as handPoseDetection from '@tensorflow-models/hand-pose-detection';

import { clock } from './clock';
import { sizes } from './sizes';

const model = handPoseDetection.SupportedModels.MediaPipeHands;
const detector = await handPoseDetection.createDetector(model, {
  runtime: 'mediapipe',
  modelType: 'full',
  solutionPath: '/hands',
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
  x: sizes.w / 2,
  y: sizes.h / 2,
  active: false,
  inView: false,
};

const { canvas: vCanvas, ctx: vCtx } = createCanvas();

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
  detector.estimateHands(vCanvas).then((hands) => {
    const rightHand = hands.find(
      (hand) => hand.handedness === 'Right' && hand.score > 0.8,
    );
    cursor.inView = !!rightHand;
    if (rightHand) {
      const [, , , , thumb, , , , index] = rightHand.keypoints;
      const ratio60 = 0.3;
      const delta60 = 16;
      const ratio = 1 - Math.pow(1 - ratio60, clock.delta / delta60);
      cursor.x = lerp(cursor.x, index.x, ratio);
      cursor.y = lerp(cursor.y, index.y, ratio);
      const distance = Math.sqrt(
        (thumb.x - index.x) ** 2 + (thumb.y - index.y) ** 2,
      );
      cursor.active = distance < (cursor.active ? 70 : 30);
    } else {
      cursor.active = false;
    }
  });
}

function updateVideoCanvas() {
  const { w, h } = sizes;
  vCtx.clearRect(0, 0, w, h);
  drawVideo();
  updateCursorPosition();
}

const { ctx: pCtx } = createCanvas();

function drawPointer() {
  const { x, y, active, inView } = cursor;
  if (!inView) return;
  pCtx.save();
  pCtx.beginPath();
  pCtx.arc(x, y, 5, 0, Math.PI * 2);
  pCtx.fillStyle = active ? 'red' : 'black';
  pCtx.fill();
  pCtx.restore();
}

function updatePointerCanvas() {
  const { w, h } = sizes;
  pCtx.clearRect(0, 0, w, h);
  drawPointer();
}

const { ctx: mCtx } = createCanvas();
let active = false;
function updateMainCanvas() {
  if (!cursor.active) {
    if (active) {
      active = false;
      mCtx.closePath();
    }
    return;
  }

  mCtx.lineWidth = 2;
  mCtx.strokeStyle = 'red';
  mCtx.lineCap = 'round';
  if (cursor.active && active === false) {
    active = true;
    mCtx.beginPath();
    mCtx.moveTo(cursor.x, cursor.y);
  } else {
    mCtx.lineTo(cursor.x, cursor.y);
  }
  mCtx.stroke();
}

function update() {
  updateVideoCanvas();
  updatePointerCanvas();
  updateMainCanvas();
}
