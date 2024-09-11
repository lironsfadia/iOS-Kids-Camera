import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleProp, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '~/components/ThemedText';
import useThemeColor from '~/constants/Colors';
import { ICON_SIZE } from '../constants';

interface FuncCameraButtonProps {
  icon?: string;
  title?: string;
  onPress: (isOn: boolean) => void;
  containerStyle?: StyleProp<any>;
}

const FuncCameraButton = ({ icon, title, onPress, containerStyle }: FuncCameraButtonProps) => {
  const colors = useThemeColor();
  return (
    <TouchableOpacity
      style={[containerStyle, { backgroundColor: colors.background, borderRadius: 40 }]}
      onPress={onPress}>
      {icon ? <Ionicons name={icon} size={ICON_SIZE} color="white" /> : null}
      {title ? <ThemedText style={{ color: colors.text }}>{title}</ThemedText> : null}
    </TouchableOpacity>
  );
};

export default FuncCameraButton;

const styles = StyleSheet.create({
  container: {},
});
