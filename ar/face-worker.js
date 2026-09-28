/* No camera frame leaves this worker. Pin JS/WASM together to prevent ABI drift. */
let landmarker
self.onmessage = async ({ data }) => {
  if (data.type === 'init') {
    try {
      const { FaceLandmarker, FilesetResolver } = await import('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/vision_bundle.mjs')
      const files = await FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm')
      landmarker = await FaceLandmarker.createFromOptions(files, {
        baseOptions: { modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task', delegate: 'CPU' },
        runningMode: 'VIDEO', numFaces: 1, outputFacialTransformationMatrixes: true,
      })
      self.postMessage({ type: 'ready' })
    } catch { self.postMessage({ type: 'error', message: '얼굴 추적 모델을 불러오지 못했습니다.' }) }
  }
  if (data.type === 'frame' && landmarker) {
    try {
      const result = landmarker.detectForVideo(data.bitmap, data.at)
      self.postMessage({ type: 'pose', points: result.faceLandmarks[0] || [], matrix: result.facialTransformationMatrixes[0]?.data || [], at: data.at })
    } catch { self.postMessage({ type: 'error', message: '이 기기에서 얼굴 추적을 실행하지 못했습니다.' }) }
    finally { data.bitmap.close() }
  }
}
