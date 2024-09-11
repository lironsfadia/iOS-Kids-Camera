import React from 'react';

import { QrIconProps } from './types';
import FuncCameraButton from './FuncCameraButton';

const QrButton = ({ onPress }: QrIconProps) => {
  return <FuncCameraButton icon={'qr-code-sharp'} onPress={onPress} />;
};

export default QrButton;
