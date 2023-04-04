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

const canvas = document.createElement('canvas');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const ctx = canvas.getContext('2d')!;
document.body.appendChild(canvas);

resize();
sizes.addEventListener('resize', resize);
clock.addEventListener('tick', update);

function resize() {
  canvas.width = sizes.w;
  canvas.height = sizes.h;
  canvas.style.width = `${sizes.w / sizes.r}px`;
  canvas.style.height = `${sizes.h / sizes.r}px`;
}

const cursor = {
  x: sizes.w / 2,
  y: sizes.h / 2,
  active: false,
  inView: false,
};

function drawVideo() {
  const { w, h } = sizes;
  ctx.save();
  ctx.scale(-1, 1);
  ctx.translate(-w, 0);
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
  ctx.drawImage(video, sx, sy, sw, sh, 0, 0, w, h);
  ctx.restore();
}

function drawPointer() {
  const { x, y, active, inView } = cursor;
  if (!inView) return;
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = active ? 'red' : 'black';
  ctx.fill();
  ctx.restore();
}

function updateCursor() {
  detector.estimateHands(canvas).then((hands) => {
    hands.forEach((hand) => {
      const [, , , , thumb, , , , index] = hand.keypoints;
      cursor.x = index.x;
      cursor.y = index.y;
      const distance = Math.sqrt(
        (thumb.x - index.x) ** 2 + (thumb.y - index.y) ** 2,
      );
      cursor.active = distance < (cursor.active ? 100 : 30);
    });
    cursor.inView = hands.length > 0;
    if (!cursor.inView) {
      cursor.active = false;
    }
  });
}

function update() {
  const { w, h } = sizes;
  ctx.clearRect(0, 0, w, h);
  drawVideo();
  drawPointer();
  updateCursor();
}
