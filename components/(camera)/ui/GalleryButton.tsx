import React from 'react';
import { StyleSheet } from 'react-native';
import FuncCameraButton from './FuncCameraButton';
import useMediaGallery from '../components/GalleryControl';

const GalleryButton = () => {
  const { onPress, containterStyle } = useMediaGallery();

  return (
    <FuncCameraButton
      icon={'image-outline'}
      onPress={onPress}
      containerStyle={containterStyle}
    />
  );
};

export default GalleryButton;
