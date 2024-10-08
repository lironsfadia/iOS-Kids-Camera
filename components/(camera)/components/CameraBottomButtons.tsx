import React from 'react';
import { View } from 'react-native';
import ExposureButton from '../ui/ExposureButton';
import ZoomButton from '../ui/ZoomButton';
import CaptureButton from '../widgets/Camera/CaptureButton';

interface CameraBottomButtonsProps {
  setZoom: (zoom: number) => void;
  zoom: number | undefined;
  setShowZoomControls: (show: boolean) => void;
  setShowExposureControls: (show: boolean) => void;
  showZoomControls: boolean;
  showExposureControls: boolean;
  onTakePhotoPressed: () => void;
  onStartRecording: () => void;
  isRecording: boolean;
  uiRotation: number;
  exposure: number | undefined;
  setExposure: (exposure: number) => void;
}

const CameraBottomButtons: React.FC<CameraBottomButtonsProps> = ({
  setZoom,
  zoom,
  exposure,
  setShowZoomControls,
  showZoomControls,
  showExposureControls,
  setShowExposureControls,
  onTakePhotoPressed,
  onStartRecording,
  isRecording,
  uiRotation,
  setExposure,
}: CameraBottomButtonsProps) => {
  return (
    <View className="flex-1 flex-row items-end justify-between px-5">
      <ZoomButton
        handleZoom={setZoom}
        showZoomControls={showZoomControls}
        handleShowZoomControls={setShowZoomControls}
        zoom={zoom}
      />
      <CaptureButton
        pressHandler={onTakePhotoPressed}
        longPressHandler={onStartRecording}
        isRecording={isRecording}
        uiRotation={uiRotation}
      />
      <ExposureButton
        handleShowExposureControls={setShowExposureControls}
        showExposureControls={showExposureControls}
        exposure={exposure}
        handleExposure={setExposure}
      />
    </View>
  );
};

export default CameraBottomButtons;
