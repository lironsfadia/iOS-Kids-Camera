import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Camera } from 'react-native-vision-camera';
import { BlurView } from 'expo-blur';

import CaptureButton from './CaptureButton';
import { CameraViewProps } from './types';
import { View } from 'react-native';
import ZoomButton from '../ui/ZoomButton';
import ExposureButton from '../ui/ExposureButton';
import CameraBottomButtons from './CameraBottomButtons';
import CameraOverlayButtons from './CameraButtons';
import { ThemedText } from '~/components/ThemedText';

const CameraView = ({
  device,
  camera,
  isActive,
  cameraMode,
  codeScanner,
  setCameraMode,
  isRecording,
  flashMode,
  setFlashMode,
  onError,
  setUiRotation,
  uiRotation,
  onTakePhotoPressed,
  onStartRecording,
  zoom,
  setZoom,
  exposure,
  torch,
  setTorch,
  cameraPosition,
  setCameraPosition,
  showZoomControls,
  setShowZoomControls,
  showExposureControls,
  setShowExposureControls,
}: CameraViewProps) => {
  return (
    <>
      <View style={{ flex: 2, borderRadius: 10, overflow: 'hidden' }}>
        <Camera
          ref={camera}
          codeScanner={codeScanner}
          isActive={isActive && cameraMode === 'qr'}
          device={device}
        />
        <Camera
          ref={camera}
          style={{
            flex: 1,
          }}
          device={device}
          isActive={isActive && cameraMode === 'camera'}
          photo={!isRecording}
          video={isRecording}
          zoom={zoom}
          exposure={exposure}
          torch={torch}
          onInitialized={() => console.log('Camera initialized')}
          resizeMode="cover"
          onError={onError}
          onUIRotationChanged={setUiRotation}
        />
        {/* <CameraOverlayButtons
          cameraPosition={cameraPosition}
          cameraPositionHandler={setCameraPosition}
          flashMode={flashMode}
          flashModeHandler={setFlashMode}
          torchMode={torch}
          torchModeHandler={setTorch}
          cameraModeHandler={setCameraMode}
          uiRotation={uiRotation}
        />
        // in ios UIVisualEffectView
        <BlurView
          intensity={100}
          tint="systemMaterialDark"
          style={styles.blurView}
          experimentalBlurMethod="dimezisBlurView" //android
        >
          <ThemedText style={{ color: 'white' }}>Exposure: {exposure} | Zoom: x(zoom)</ThemedText>
        </BlurView> */}
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.7 }}>
          <ThemedText>Max FPS: {device.formats[0].maxFps}</ThemedText>
          <ThemedText>
            Width: {device.formats[0].photoWidth} Height:
            {device.formats[0].photoHeight}
          </ThemedText>
          <ThemedText>Camera: {device.name}</ThemedText>
        </View>
        <View
          style={{
            flex: 1.1,
            backgroundColor: 'red',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          {/* <CameraBottomButtons
            setZoom={setZoom}
            zoom={zoom}
            setShowZoomControls={setShowZoomControls}
            showZoomControls={showZoomControls}
            setShowExposureControls={setShowExposureControls}
            showExposureControls={showExposureControls}
            onTakePhotoPressed={onTakePhotoPressed}
            onStartRecording={onStartRecording}
            isRecording={isRecording}
            uiRotation={uiRotation}
          /> */}
        </View>
      </View>
    </>
  );
};
export default CameraView;

const styles = StyleSheet.create({
  blurView: {
    flex: 1,
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 10,
  },
});
