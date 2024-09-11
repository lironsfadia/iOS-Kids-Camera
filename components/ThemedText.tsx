import { Text, type TextProps } from 'react-native';
import useThemeColor from '~/constants/Colors';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  customClassName?: string;
};

export function ThemedText({
  lightColor,
  darkColor,
  type = 'default',
  customClassName,
  ...rest
}: ThemedTextProps) {
  const {
    text: { secondary },
  } = useThemeColor();

  let classNameByType = '';

  switch (type) {
    case 'default':
      classNameByType = 'text-sm leading-6';
      break;
    case 'title':
      classNameByType = 'text-2xl leading-8 font-bold';
      break;
    case 'defaultSemiBold':
      classNameByType = 'text-lg leading-8 font-semibold';
      break;
    case 'subtitle':
      classNameByType = 'text-xl font-bold';
      break;
    case 'link':
      classNameByType = 'text-md leading-10 text-green-700';
      break;
  }

  const className = `${customClassName} ${classNameByType}` || '';

  return <Text className={className} style={{ color: secondary }} {...rest} />;
}
