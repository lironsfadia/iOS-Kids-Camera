import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import FlashControl from '../components/FlashControl';
import { FlashIconProps } from './types';
import { ICON_SIZE } from '@/app/(settings)/constants';
import FuncCameraButton from './FuncCameraButton';

const FlashButton = ({ mode, setMode }: FlashIconProps) => {
  const { flashIcon, onPress } = FlashControl({
    mode,
    setMode,
  });
  return <FuncCameraButton icon={flashIcon} onPress={onPress} />;
};

export default FlashButton;
