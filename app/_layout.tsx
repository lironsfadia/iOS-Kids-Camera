import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  //const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <GestureHandlerRootView>
      {/* <GluestackUIProvider mode="dark"> */}
      {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="camera" options={{ headerShown: true }} />
        <Stack.Screen name="settings" options={{ headerShown: true }} />
        <Stack.Screen name="(login)/loginScreen" options={{ headerShown: true }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      {/* </ThemeProvider> */}
      {/* </GluestackUIProvider> */}
    </GestureHandlerRootView>
  );
}
