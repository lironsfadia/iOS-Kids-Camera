import React from 'react';

import FuncCameraButton from './FuncCameraButton';
import { Redirect, useRouter } from 'expo-router';

const SettingsButton = () => {
  const router = useRouter();

  const onPress = () => {
    router.push('(settings)/Settings');
  };
  return <FuncCameraButton icon={'settings'} onPress={onPress} />;
};

export default SettingsButton;
