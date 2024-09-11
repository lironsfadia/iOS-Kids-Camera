import { View, type ViewProps } from 'react-native';
import useThemeColor from '~/constants/Colors';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  customClassName?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  customClassName,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor();

  return (
    <View className={`${customClassName || ''}`} style={[{ backgroundColor }]} {...otherProps} />
  );
}
