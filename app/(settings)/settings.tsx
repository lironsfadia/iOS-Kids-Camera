import { View, SafeAreaView, TouchableHighlight, Alert, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';

import { ICON_SIZE } from '~/components/(camera)/constants';
import useCameraPermissions from '~/components/(camera)/hooks/useCameraPermissions';
import PermissionBox from '~/components/(settings)/components/PermissionBox';
import { ThemedText } from '~/components/ThemedText';
import { ThemedView } from '~/components/ThemedView';
import useThemeColor from '~/constants/Colors';

const Settings = () => {
  enum PermissionStatus {
    NOT_DETERMINED = 'not-determined',
    GRANTED = 'granted',
  }

  const theme = useThemeColor();
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
    await requestMediaLibraryPermission();
  };

  const handleContinue = () => {
    if (isCameraPermissionSet && isMicPermissionSet && isMediaLibPermissionSet) {
      router.replace('/camera');
    } else {
      Alert.alert('Please go to settings and enable permissions');
    }
  };

  const permissions = [
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

  return (
    <SafeAreaView className="flex-1">
      <ThemedView customClassName="flex-1 p-4">
        <Stack.Screen options={{ headerShown: false }} />
        <ThemedText type="title">Settings</ThemedText>

        <View className="p-3" />

        <ThemedText type="subtitle" customClassName="ml-2 flex-shrink">
          Camera needs access to a few permissions in order to work proprly
        </ThemedText>

        <View className="p-3" />

        <View className="flex-row gap-3">
          <Ionicons name={'lock-closed-outline'} size={24} color="orange" />
          <ThemedText type="defaultSemiBold" customClassName="text-left font-bold tracking-wider">
            Required
          </ThemedText>
        </View>
        <View className="p-3" />
        <View className="items-start gap-3">
          {permissions.map(({ name, description, icon, value, requestHandler }) => (
            <PermissionBox
              title={name}
              text={description}
              icon={icon}
              switchValue={value}
              onToggle={requestHandler}

              //async () => await requestMediaLibraryPermission()
            />
          ))}
        </View>

        <View className="p-7" />

        <TouchableHighlight
          onPress={handleContinue}
          className="flex-row gap-10 self-center rounded-full border-2 border-white p-2.5">
          <Ionicons name="arrow-forward-outline" color={'white'} size={ICON_SIZE} />
        </TouchableHighlight>
      </ThemedView>
    </SafeAreaView>
  );
};

export default Settings;
