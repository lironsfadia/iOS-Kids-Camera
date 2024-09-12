import React from 'react';
import {
  StyleProp,
  TouchableHighlight,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Text,
} from 'react-native';

import Animated, { BounceIn } from 'react-native-reanimated';
import useThemeColor from '~/constants/Colors';

interface AnimatedCameraButtonProps {
  onPress: (isOn: boolean) => void;
  handleOptionsPress: (option: number) => void;
  containerStyle?: StyleProp<any>;
  options: string[] | number[];
  selectedOption: number | undefined;
  buttonTitleFormat: string;
}

const AnimatedCameraButton = ({
  onPress,
  containerStyle,
  options,
  handleOptionsPress,
  selectedOption,
  buttonTitleFormat,
}: AnimatedCameraButtonProps) => {
  const buttonTitle = buttonTitleFormat.replace('{0}', selectedOption ?? '');
  const { width, height } = useWindowDimensions();
  const radius = Math.min(width, height - 100) * 0.35;
  const colors = useThemeColor();
  return (
    <View style={{ flex: 1, padding: 10 }}>
      {options.map((z, i) => {
        const angle = (i / options.length / 3) * 2 * Math.PI - Math.PI / 2; // Start at 12 o'clock
        const x = Math.cos(angle) * radius + 40;
        const y = Math.sin(angle) * radius + height / 4;

        return (
          <Animated.View
            key={i}
            entering={BounceIn.delay(i * 100)}
            style={{
              position: 'absolute',
              left: x,
              top: y,
            }}>
            <TouchableHighlight
              onPress={() => handleOptionsPress(z)}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: selectedOption === z ? '#ffffff' : '#ffffff30',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: selectedOption === z ? 'black' : 'white',
                  fontWeight: '600',
                }}>
                {z}x
              </Text>
            </TouchableHighlight>
          </Animated.View>
        );
      })}

      <TouchableOpacity
        onPress={() => onPress(false)}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: '#ffffff30',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          left: 30,
          top: height / 4,
        }}>
        <Text style={{ color: 'white', fontWeight: '600' }}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedCameraButton;
