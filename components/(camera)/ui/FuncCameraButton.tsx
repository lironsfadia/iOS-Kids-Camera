import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '~/components/ThemedText';
import useThemeColor from '~/constants/Colors';
import { ICON_SIZE } from '../constants';

interface FuncCameraButtonProps {
  icon?: string;
  title?: string;
  onPress: () => void;
  containerStyle?: string;
}

const FuncCameraButton = ({ icon, title, onPress, containerStyle }: FuncCameraButtonProps) => {
  const colors = useThemeColor();
  return (
    <TouchableOpacity
      className={`radius-10 w-30 h-30 flex-row items-center justify-center rounded-lg p-1 ${containerStyle}`}
      onPress={onPress}>
      {icon ? <Ionicons name={icon} size={ICON_SIZE} color={colors.icon} /> : null}
      {title ? <ThemedText customClassName="text-white">{title}</ThemedText> : null}
    </TouchableOpacity>
  );
};

export default FuncCameraButton;

const styles = StyleSheet.create({
  container: {},
});
