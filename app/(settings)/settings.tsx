import { View, SafeAreaView, TouchableHighlight } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';

import { ICON_SIZE } from '~/components/(camera)/constants';
import PermissionBox from '~/components/(settings)/components/PermissionBox';
import { ThemedText } from '~/components/ThemedText';
import { ThemedView } from '~/components/ThemedView';
import {
  PERMISSIONS_SUBTITLE_TEXT,
  PERMISSIONS_TITLE_TEXT,
  REQUIRED_PERMISSIONS_TEXT,
} from '~/components/(settings)/constants';
import useSettings from '~/components/(settings)/hooks/useSettings';

const Settings = () => {
  const { permissions, handleContinue } = useSettings();

  return (
    <SafeAreaView className="flex-1">
      <ThemedView customClassName="flex-1 p-4">
        <Stack.Screen options={{ headerShown: false }} />
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
              title={name}
              text={description}
              icon={icon}
              switchValue={value}
              onToggle={requestHandler}
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
