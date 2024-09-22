import type { Frame } from 'react-native-vision-camera';

declare module 'react-native-vision-camera' {
  export interface FrameProcessorPlugins {
    xyzProcess(frame: Frame): {
      label: string;
      confidence: number;
    }[];
  }
}

export { xyzProcess };
