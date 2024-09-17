import React from 'react';
import { Redirect, Stack } from 'expo-router';
import { Text, StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';

import CameraControls from '../../components/(camera)/components/CameraControls';
import PhotoViewer from '../../components/(camera)/components/PhotoViewer';
import CameraView from '../../components/(camera)/components/CameraView';
import ErrorModal from '../../components/(camera)/ui/modals/errorModal';
import useCameraPermissions from '../../components/(camera)/hooks/useCameraPermissions';

const CameraScreen = () => {
  const {
    device,
    format,
    isActive,
    photo,
    video,
    cameraMode,
    camera,
    onTakePhotoPressed,
    isRecording,
    onStartRecording,
    flashMode,
    setFlashMode,
    onError,
    error,
    clearError,
    setUiRotation,
    uiRotation,
    zoom,
    setZoom,
    torch,
    setTorch,
    cameraPosition,
    setCameraPosition,
    showZoomControls,
    setShowZoomControls,
    showExposureControls,
    setShowExposureControls,
    batteryInfo,
    exposure,
    setExposure,
    //frameProcessor,
    ...cameraProps
  } = CameraControls();
  const { hasPermissions } = useCameraPermissions();

  if (hasPermissions !== undefined && !hasPermissions) {
    return <Redirect href="/settings" />;
  }

  if (!device) return <Text>Camera device not found</Text>;

  return (
    <SafeAreaView className="flex-1">
      {(photo || video) && (
        <PhotoViewer
          photo={photo}
          video={video}
          uploadPhoto={cameraProps.uploadPhoto}
          setPhoto={cameraProps.setPhoto}
        />
      )}
      {!photo && !video && (
        <CameraView
          setFlashMode={setFlashMode}
          flashMode={flashMode}
          camera={camera}
          device={device}
          zoom={zoom}
          setZoom={setZoom}
          setTorch={setTorch}
          torch={torch}
          cameraPosition={cameraPosition}
          setCameraPosition={setCameraPosition}
          exposure={exposure}
          setExposure={setExposure}
          isActive={isActive}
          cameraMode={cameraMode}
          isRecording={isRecording}
          onError={onError}
          setUiRotation={setUiRotation}
          uiRotation={uiRotation}
          onStartRecording={onStartRecording}
          onTakePhotoPressed={onTakePhotoPressed}
          showZoomControls={showZoomControls}
          setShowZoomControls={setShowZoomControls}
          showExposureControls={showExposureControls}
          setShowExposureControls={setShowExposureControls}
          batteryInfo={batteryInfo}
          {...cameraProps}
        />
      )}
      {error && <ErrorModal error={error} onPress={clearError} />}
    </SafeAreaView>
  );
};

export default CameraScreen;
