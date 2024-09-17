import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { PhotoViewerProps } from './types';
import { Stack } from 'expo-router';

const PhotoViewer = ({ photo, video, uploadPhoto, setPhoto }: PhotoViewerProps) => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Image source={{ uri: photo ? photo.path : video.path }} style={styles.image} />
      <View style={styles.container}>
        <Button title="Upload" onPress={uploadPhoto} />
      </View>
      <FontAwesome5
        onPress={() => setPhoto(null)}
        name="arrow-left"
        size={24}
        color="white"
        style={styles.icon}
      />
    </>
  );
};

export default PhotoViewer;

const styles = StyleSheet.create({
  container: { position: 'absolute', bottom: 50, width: '100%' },
  image: {
    flex: 1,
  },
  icon: { position: 'absolute', top: 50, left: 20 },
});
