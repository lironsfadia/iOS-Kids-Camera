import { StyleSheet, View, SafeAreaView, TouchableHighlight, Alert } from 'react-native';
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
    console.log('sssj');
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
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <ThemedText type="title">Settings</ThemedText>

        <View style={styles.spacer} />
        <View style={styles.spacer} />

        <ThemedText type="subtitle" style={styles.subtitle}>
          Camera needs access to a few permissions in order to work proprly
        </ThemedText>
        <View style={styles.spacer} />
        <View style={styles.row}>
          <Ionicons name={'lock-closed-outline'} size={24} color="orange" />
          <ThemedText type="defaultSemiBold" style={styles.footnote}>
            Required
          </ThemedText>
        </View>
        <View style={styles.spacer} />
        <View style={styles.permissionsContainer}>
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

        <View style={styles.spacer} />
        <View style={styles.spacer} />

        <TouchableHighlight
          onPress={handleContinue}
          style={StyleSheet.compose(styles.row, styles.continueButton)}>
          <Ionicons name="arrow-forward-outline" color={'white'} size={ICON_SIZE} />
        </TouchableHighlight>
      </ThemedView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  subtitle: {
    marginLeft: 10,
    flexShrink: 1,
  },
  footnote: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  row: { flexDirection: 'row', gap: 10 },
  permissionsContainer: { gap: 10 },
  spacer: {
    marginVertical: 8,
  },
  continueButton: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    alignSelf: 'center',
  },
});
