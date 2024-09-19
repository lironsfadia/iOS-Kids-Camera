import {
  TakePhotoOptions,
  PhotoFile,
  VideoFile,
  CameraDevice,
  useCodeScanner,
  Camera,
} from 'react-native-vision-camera';

export interface CameraOverlayButtonsProps {
  flashMode: 'auto' | 'on' | 'off' | undefined;
  flashModeHandler: (mode: 'auto' | 'on' | 'off') => void;
  cameraModeHandler: (mode: 'camera' | 'qr') => void;
  torchMode: boolean;
  torchModeHandler: (mode: 'on' | 'off') => void;
  uiRotation: number;
  cameraPosition: 'back' | 'front';
  cameraPositionHandler: (position: 'back' | 'front') => void;
}

export interface CameraControlsOutputs {
  exposure: number;
  batteryInfo: BatteryInfo | undefined;
  hasPermissions: boolean;
  zoom: number | undefined;
  requestPermission: () => void;
  requestMicrophonePermission: () => void;
  flashMode: TakePhotoOptions['flash'];
  setFlashMode: (mode: TakePhotoOptions['flash']) => void;
  isActive: boolean;
  setIsActive: (active: boolean) => void;
  photo: PhotoFile | null;
  video: VideoFile | null;
  setVideo: (video: VideoFile | null) => void;
  setPhoto: (photo: PhotoFile | null) => void;
  device: CameraDevice;
  onTakePhotoPressed: () => void;
  uploadPhoto: () => void;
  codeScanner: ReturnType<typeof useCodeScanner>;
  setCameraMode: (mode: 'camera' | 'qr') => void;
  cameraMode: 'camera' | 'qr';
  camera: React.MutableRefObject<Camera | null>;
  onStartRecording: () => void;
  isRecording: boolean;
  onError: (error: any) => void;
  error: string | null;
  clearError: () => void;
  setUiRotation: (rotation: number) => void;
  format: any;
  frameProcessor?: any;
  torch: boolean;
  setTorch: (mode: 'on' | 'off') => void;
  cameraPosition: 'back' | 'front';
  setCameraPosition: (position: 'back' | 'front') => void;
  showZoomControls: boolean;
  setShowZoomControls: (showZoomControls: boolean) => void;
  showExposureControls: boolean;
  setShowExposureControls: (showExposureControls: boolean) => void;
  setExposure: (exposure: number) => void;
}

export interface BatteryInfo {
  level?: number | undefined;
  state?: string | undefined;
  lowPowerMode?: boolean | undefined;
  isCharging: boolean | undefined;
}

export interface FlashControlProps {
  mode: 'on' | 'off';
  setMode: (mode: 'on' | 'off') => void;
}

export interface CaptureButtonProps {
  pressHandler?: () => void;
  longPressHandler?: () => void;
  isRecording: boolean;
  uiRotation: number;
}

export interface useCaptureButtonProps {
  uiRotation: number;
  isRecording: boolean;
}

export interface ErrorModalProps {
  error: string;
  onPress: () => void;
}
