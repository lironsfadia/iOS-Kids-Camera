import React from 'react';
import { View } from 'react-native';

import { Camera } from 'react-native-vision-camera';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

import CameraBottomButtons from './CameraBottomButtons';
import CameraOverlayButtons from './CameraButtons';
import { ThemedText } from '~/components/ThemedText';
import AnimatedInfoSection from '../widgets/AnimatedInfoSection';
import { useCamera } from '~/contexts/cameraContext';

const CameraView = () => {
  const {
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
    batteryInfo,
    setExposure,
  } = useCamera();

  return (
    <>
      <View className="flex-[4]">
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
        {/* // in ios UIVisualEffectView */}
        <BlurView
          intensity={60}
          tint="dark"
          className="absolute left-2 right-2 top-1 overflow-hidden rounded-2xl">
          <View className="flex-row items-center justify-between px-4 py-2">
            <View className="flex-row items-center">
              <Ionicons name="eye-outline" size={20} color="white" />
              <ThemedText className="ml-2 text-sm text-white">
                Exposure: {exposure ? exposure.toFixed(1) : 0}
              </ThemedText>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="scan-outline" size={20} color="white" />
              <ThemedText className="ml-2 text-sm text-white">Zoom: {zoom?.toFixed(1)}x</ThemedText>
            </View>
          </View>
        </BlurView>

        <CameraOverlayButtons
          cameraPosition={cameraPosition}
          cameraPositionHandler={setCameraPosition}
          flashMode={flashMode}
          flashModeHandler={setFlashMode}
          torchMode={torch}
          torchModeHandler={setTorch}
          cameraModeHandler={setCameraMode}
          uiRotation={uiRotation}
        />
      </View>

      <View className="flex-[1.5] gap-7 bg-black py-3">
        <View className="flex-[0.5]">
          <AnimatedInfoSection device={device} batteryInfo={batteryInfo} />
        </View>
        <View className="flex-[1]">
          <CameraBottomButtons
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
            exposure={exposure}
            setExposure={setExposure}
          />
        </View>
      </View>
    </>
  );
};
export default CameraView;
