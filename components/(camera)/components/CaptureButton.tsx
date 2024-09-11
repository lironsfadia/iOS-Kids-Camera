import React from 'react';
import { TouchableHighlight, View } from 'react-native';

import useCaptureButton from '../hooks/useCaptureButton';
import { CaptureButtonProps } from './types';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonIcon } from '~/components/ui/button';

const CaptureButton = ({
  pressHandler,
  longPressHandler,
  isRecording,
  uiRotation,
}: CaptureButtonProps) => {
  const { containerStyle, buttonStyles } = useCaptureButton({
    uiRotation,
    isRecording,
  });
  return (
    <View style={containerStyle}>
      <TouchableHighlight
        onPress={pressHandler}
        onLongPress={longPressHandler}
        style={buttonStyles}>
        <ButtonIcon as={MaterialIcons} name="photo-camera" size={48} />
      </TouchableHighlight>
    </View>
  );
};

export default CaptureButton;
