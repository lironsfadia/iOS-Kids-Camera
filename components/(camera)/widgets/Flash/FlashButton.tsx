import React from 'react';

import FlashControl from '../../components/FlashControl';
import FuncCameraButton from '../../ui/FuncCameraButton';
import { FlashIconProps } from './types';

const FlashButton = ({ mode, setMode }: FlashIconProps) => {
  const { flashIcon, onPress } = FlashControl({
    mode,
    setMode,
  });
  return <FuncCameraButton icon={flashIcon} onPress={onPress} />;
};

export default FlashButton;
