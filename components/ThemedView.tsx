import { View, type ViewProps } from 'react-native';
import useThemeColor from '~/constants/Colors';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor();

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
