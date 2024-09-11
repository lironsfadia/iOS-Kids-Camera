// The issue occurs when using the useFrameProcessor to resize frames and play them every second with runAtTargetFps. Additionally, runAsync is used for frame processing, and frame detection is performed with react-native-fast-tflite using runSync.

useFrameProcessor((frame: Frame) => {
  'worklet';
  const resizes = resize(frame, {
    scale: {
      width: 224,
      height: 480,
    },
    pixelFormat: 'rgb',
    dataType: 'uint8',
  });
  runAtTargetFps(1, () => {
    'worklet';
    runAsync(frame, () => {
      'worklet';

      const uint8 = Float32Array.from(resized, (value) => value / 255);
      const dict = model.runSync([uint8])[0];
    });
  });
});
