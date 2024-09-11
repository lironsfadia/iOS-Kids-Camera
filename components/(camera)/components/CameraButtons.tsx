import { StyleSheet, View } from 'react-native';
import React from 'react';

import { CameraOverlayButtonsProps } from './types';
import FlashButton from '../ui/FlashButton';
import QrButton from '../ui/QrButton';
import SettingsButton from '../ui/SettingsButton';
import FlashlightButton from '../ui/FlashlightButton';
import CameraPositionButton from '../ui/CameraPositionButton';
import useCameraOverlayButtons from '../hooks/useCameraOverlayButtons';
import { VStack } from '~/components/ui/vstack';

const CameraOverlayButtons = ({
  flashMode,
  flashModeHandler,
  cameraModeHandler,
  torchMode,
  torchModeHandler,
  cameraPosition,
  cameraPositionHandler,
  uiRotation,
}: CameraOverlayButtonsProps) => {
  const { containerStyle, handleCameraMode } = useCameraOverlayButtons({
    uiRotation,
    cameraModeHandler,
  });
  return (
    <View style={containerStyle}>
      <VStack space="md">
        <FlashlightButton isOn={torchMode} toggleFlashlight={torchModeHandler} />
        <CameraPositionButton position={cameraPosition} togglePosition={cameraPositionHandler} />
        <FlashButton mode={flashMode} setMode={flashModeHandler} />
        <QrButton onPress={handleCameraMode} />
        <SettingsButton />
      </VStack>
    </View>
  );
};

export default CameraOverlayButtons;

const styles = StyleSheet.create({});
