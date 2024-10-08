import React from 'react';
import { View, SafeAreaView, TouchableHighlight } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { ICON_SIZE } from '~/components/(camera)/constants';
import PermissionBox from '~/components/(settings)/PermissionBox';
import { ThemedText } from '~/components/ThemedText';
import { ThemedView } from '~/components/ThemedView';
import {
  DEVICE_CAMERAS,
  PERMISSIONS_SUBTITLE_TEXT,
  PERMISSIONS_TITLE_TEXT,
  REQUIRED_PERMISSIONS_TEXT,
} from '~/components/(settings)/constants';
import useSettings from '~/hooks/useSettings';

import { useCamera } from '~/contexts/cameraContext';
import AnimatedInfoSection from '~/components/(camera)/widgets/AnimatedInfoSection';

const Settings = () => {
  const { device, batteryInfo } = useCamera();
  const { permissions, handleContinue } = useSettings();

  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen options={{ headerShown: false }} />
      <ThemedView customClassName="flex-1 p-4">
        <ThemedText type="title">{PERMISSIONS_TITLE_TEXT}</ThemedText>

        <View className="p-3" />

        <ThemedText type="subtitle" customClassName="ml-2 flex-shrink">
          {PERMISSIONS_SUBTITLE_TEXT}
        </ThemedText>

        <View className="p-3" />

        <View className="flex-row gap-3">
          <Ionicons name={'lock-closed-outline'} size={24} color="orange" />
          <ThemedText type="defaultSemiBold" customClassName="text-left font-bold tracking-wider">
            {REQUIRED_PERMISSIONS_TEXT}
          </ThemedText>
        </View>
        <View className="p-3" />
        <View className="items-start gap-3">
          {permissions.map(({ name, description, icon, value, requestHandler }) => (
            <PermissionBox
              key={name}
              title={name}
              text={description}
              icon={icon}
              switchValue={value}
              onToggle={requestHandler}
            />
          ))}
        </View>

        <View className="p-3" />

        <ThemedText type="title">{DEVICE_CAMERAS}</ThemedText>

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
