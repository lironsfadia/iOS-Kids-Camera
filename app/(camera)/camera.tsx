import React from 'react';
import { Redirect, Stack } from 'expo-router';
import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';

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
    torch,
    setTorch,
    cameraPosion,
    setCameraPosition,
    showZoomControls,
    setShowZoomControls,
    showExposureControls,
    setShowExposureControls,

    //frameProcessor,
    ...cameraProps
  } = CameraControls();
  const { hasPermissions } = useCameraPermissions();
  console.log('ghsdahjgdasjhdgsajdshghjdsgjhdsag');

  if (hasPermissions !== undefined && !hasPermissions) {
    return <Redirect href="/settings" />;
  }
  if (!device) return <Text>Camera device not found</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

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
          setTorch={setTorch}
          torch={torch}
          cameraPosion={cameraPosion}
          setCameraPosition={setCameraPosition}
          exposure={0}
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
          {...cameraProps}
        />
      )}
      {error && <ErrorModal error={error} onPress={clearError} />}
    </SafeAreaView>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
});
