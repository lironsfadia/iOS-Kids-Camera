import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import useCameraPermissions from '~/components/(camera)/hooks/useCameraPermissions';

interface Settings {
  permissions: Array<{
    name: string;
    description: string;
    icon: string;
    value: boolean | undefined;
    requestHandler: () => void;
  }>;
  handleContinue: () => void;
}

const useSettings = (): Settings => {
  const [isCameraPermissionSet, setIsCameraPermissionSet] = useState<boolean>(false);
  const [isMicPermissionSet, setIsMicPermissionSet] = useState<boolean>(false);
  const [isMediaLibPermissionSet, setIsMediaLibPermissionSet] = useState<boolean | undefined>(
    false
  );

  const {
    requestCameraPermission,
    requestMicrophonePermission,
    requestMediaLibraryPermission,
    cameraPermission,
    microphonePermission,
    isMediaLibraryPermissionGranted,
  } = useCameraPermissions();

  useEffect(() => {
    setIsCameraPermissionSet(cameraPermission);
    setIsMediaLibPermissionSet(isMediaLibraryPermissionGranted);
    setIsMicPermissionSet(microphonePermission);
  }, [cameraPermission, microphonePermission, isMediaLibraryPermissionGranted]);

  const handleCameraRequest = async () => {
    try {
      await requestCameraPermission();
    } catch (error) {
      console.log(error);
    }
    console.log(cameraPermission);
  };

  const handleMicRequest = async () => {
    await requestMicrophonePermission();
  };

  const handleMediaLibRequest = async () => {
    try {
      await requestMediaLibraryPermission();
      console.log('Permission request completed');
    } catch (error) {
      console.error('Error requesting media library permission:', error);
    }
  };

  const handleContinue = () => {
    if (isCameraPermissionSet && isMicPermissionSet && isMediaLibPermissionSet) {
      router.replace('/camera');
    } else {
      Alert.alert('Please go to settings and enable permissions');
    }
  };

  const permissions: Array<{
    name: string;
    description: string;
    icon: string;
    value: boolean | undefined;
    requestHandler: () => void;
  }> = [
    {
      name: 'Camera',
      description: 'Used for taking photos and videos.',
      icon: 'camera',
      value: isCameraPermissionSet,
      requestHandler: handleCameraRequest,
    },
    {
      name: 'Microphone',
      description: 'Used for recording videos.',
      icon: 'mic-circle-outline',
      value: isMicPermissionSet,
      requestHandler: handleMicRequest,
    },
    {
      name: 'Media Library',
      description: 'Used for saving, viewing and more.',
      icon: 'library-outline',
      value: isMediaLibPermissionSet,
      requestHandler: handleMediaLibRequest,
    },
  ];

  return { permissions, handleContinue };
};

export default useSettings;
