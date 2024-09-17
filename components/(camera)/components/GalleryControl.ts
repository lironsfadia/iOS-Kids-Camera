import { Link } from 'expo-router';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { Linking, Platform } from 'react-native';

const useMediaGallery = () => {
  const link = useMemo(() => {
    return Platform.select({
      ios: 'photos-redirect://',
      android: 'content://media/internal/images/media',
    });
  }, []);

  const onPress = useCallback(() => {
    if (link) {
      Linking.openURL(link);
    } else {
      console.error('Unsupported platform:', Platform.OS);
    }
  }, [link]);

  return { containterStyle, onPress };
};

export default useMediaGallery;
