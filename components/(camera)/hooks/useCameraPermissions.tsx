import * as MediaLibrary from 'expo-media-library';
import { useCameraPermission } from 'react-native-vision-camera';
import { useCallback, useEffect, useState } from 'react';

const useCameraPermissions = () => {
  const [hasPermissions, setHasPermissions] = useState<boolean | undefined>();
  const [mediaLibraryPermission, requestPermissionsAsync] = MediaLibrary.usePermissions();
  const { hasPermission: cameraPermission, requestPermission: requestCameraPermission } =
    useCameraPermission();

  const { hasPermission: microphonePermission, requestPermission: requestMicrophonePermission } =
    useCameraPermission();

  const requestMediaLibraryPermission = useCallback(async () => {
    try {
      await requestPermissionsAsync();
    } catch (error) {
      console.error('Error requesting media library permission:', error);
    }
  }, []);

  useEffect(() => {
    setHasPermissions(cameraPermission && microphonePermission && mediaLibraryPermission?.granted);
  }, [cameraPermission, microphonePermission, mediaLibraryPermission?.granted]);

  return {
    hasPermissions,
    cameraPermission,
    microphonePermission,
    isMediaLibraryPermissionGranted: mediaLibraryPermission?.granted,
    requestCameraPermission,
    requestMicrophonePermission,
    requestMediaLibraryPermission,
  };
};

export default useCameraPermissions;
