import { useColorScheme } from 'react-native';

const lightColors = {
  background: '#1C1C1E', // Dark gray for light mode
  text: {
    primary: '#FFFFFF',
    secondary: '#B0B0B8',
    tertiary: '#8E8E93',
  },
  accent: '#FF3B30', // Vibrant red for accents
  icon: 'grey',
  button: {
    primary: '#FFFFFF',
    secondary: '#3A3A3C',
  },
  input: {
    background: '#2C2C2E',
    text: '#FFFFFF',
    placeholder: '#8E8E93',
  },
  switch: {
    trackActive: '#34C759',
    trackInactive: '#39393D',
    thumb: '#FFFFFF',
  },
  border: '#39393D',
  success: '#34C759', // Green
  warning: '#FF9500', // Orange
  error: '#FF3B30', // Red
};

const darkColors = {
  background: '#000000', // Pure black for dark mode
  text: {
    primary: '#FFFFFF',
    secondary: '#EBEBF5',
    tertiary: '#EBEBF599', // Using opacity for tertiary text
  },
  icon: 'grey',
  accent: '#FF453A', // Slightly different red for dark mode
  button: {
    primary: '#FFFFFF',
    secondary: '#2C2C2E',
  },
  input: {
    background: '#1C1C1E',
    text: '#FFFFFF',
    placeholder: '#EBEBF599',
  },
  switch: {
    trackActive: '#30D158',
    trackInactive: '#39393D',
    thumb: '#FFFFFF',
  },
  border: '#38383A',
  success: '#30D158', // Slightly different green for dark mode
  warning: '#FF9F0A', // Slightly different orange for dark mode
  error: '#FF453A', // Same as accent
};

const useThemeColor = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const colors = isDarkMode ? darkColors : lightColors;

  return {
    ...colors,
    isDarkMode,
  };
};

export default useThemeColor;
