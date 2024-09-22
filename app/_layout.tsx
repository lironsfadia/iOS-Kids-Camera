import React, { useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme } from '~/hooks/useColorScheme';
import { GluestackUIProvider } from '~/components/ui/gluestack-ui-provider';
import SettingsButton from '~/components/(settings)/widgets/SettingsButton';
import { CameraProvider } from '~/contexts/cameraContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = [false];

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <GestureHandlerRootView>
      <GluestackUIProvider mode="dark">
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <CameraProvider>
            <Stack
              screenOptions={{
                headerShown: true,
                headerTitle: '',
                headerBackTitle: '',
                headerTintColor: 'white',
                headerStyle: {
                  backgroundColor: 'transparent',
                },
                headerRight: () => (
                  <SettingsButton iconColor={colorScheme === 'dark' ? 'white' : 'black'} />
                ),
              }}>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="camera" options={{ headerShown: true }} />
              <Stack.Screen name="settings" options={{ headerShown: false }} />
              <Stack.Screen name="login" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </CameraProvider>
        </ThemeProvider>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}
