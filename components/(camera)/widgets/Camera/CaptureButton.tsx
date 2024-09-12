import React from 'react';
import { TouchableHighlight, View } from 'react-native';

import useCaptureButton from '../../hooks/useCaptureButton';
import { CaptureButtonProps } from '../../components/types';
import { Ionicons } from '@expo/vector-icons';
import { ICON_SIZE } from '../../constants';

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
        <Ionicons name={'camera'} size={48} color={'black'} />
      </TouchableHighlight>
    </View>
  );
};

export default CaptureButton;
