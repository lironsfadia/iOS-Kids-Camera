import React from 'react';
import FuncCameraButton from '../../ui/FuncCameraButton';
import { QrIconProps } from './types';

const QrButton = ({ onPress }: QrIconProps) => {
  return <FuncCameraButton icon={'qr-code-sharp'} onPress={onPress} containerStyle={'bg-white'} />;
};

export default QrButton;
