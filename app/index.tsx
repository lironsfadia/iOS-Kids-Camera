import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { Link, Stack } from 'expo-router';

import '../global.css';
import { Container } from '~/components/Container';
import { appTitle, appDescription, appCameraButton } from '~/constants/Texts';

const Home = () => {
  return (
    <Container>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className="flex-1 justify-center p-3 align-middle">
        <Text className="mb-2 text-2xl font-bold text-white">{appTitle}</Text>
        <Text className="mb-4 text-sm font-semibold text-white">{appDescription}</Text>
        <Link href="/camera" asChild>
          <Pressable className="justify-center rounded-lg bg-green-600">
            <Text className="p-2 text-lg font-bold text-white">{appCameraButton}</Text>
          </Pressable>
        </Link>
      </View>
    </Container>
  );
};

export default Home;
