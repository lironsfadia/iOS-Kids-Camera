import React from 'react';
import { Redirect } from 'expo-router';
import { Text } from 'react-native';

import { Container } from '~/components/Container';
import useCameraPermissions from '../hooks/useCameraPermissions';
import ErrorModal from '../ui/modals/errorModal';
import CameraView from './CameraView';
import PhotoViewer from './PhotoViewer';
import { useCamera } from '~/contexts/cameraContext';

const CameraScreenContent = () => {
  const { device, photo, video, error, clearError } = useCamera();
  const { hasPermissions } = useCameraPermissions();

  if (hasPermissions !== undefined && !hasPermissions) {
    return <Redirect href="/settings" />;
  }

  if (!device) return <Text>Camera device not found</Text>;

  return (
    <Container>
      {(photo || video) && <PhotoViewer />}
      {!photo && !video && <CameraView />}
      {error && <ErrorModal error={error} onPress={clearError} />}
    </Container>
  );
};

export default CameraScreenContent;
