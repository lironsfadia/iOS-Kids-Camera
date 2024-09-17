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

interface AnimatedCameraButtonProps {
  onPress: () => void;
  handleOptionsPress: (option: string) => void;
  containerStyle?: StyleProp<any>;
  options: string[] | number[];
  selectedOption: number | undefined;
  buttonTitleFormat: string;
  side: 'left' | 'right';
}

const AnimatedCameraButton = ({
  onPress,
  containerStyle,
  options,
  handleOptionsPress,
  selectedOption,
  side,
}: AnimatedCameraButtonProps) => {
  const { width, height } = useWindowDimensions();
  const radius = Math.min(width, height - 100) * 0.25;

  const enrichedOptions = options.map((option) => {
    return {
      optionValue: option,
      onOptionPress: () => {
        handleOptionsPress(option);
      },
    };
  });

  return (
    <View className={containerStyle}>
      {enrichedOptions.map(({ optionValue, onOptionPress }, index) => {
        console.log({ selectedOption, optionValue });
        let angle;
        if (side === 'left') {
          angle = (index / options.length / 3) * 2 * Math.PI - Math.PI / 2;
        } else {
          angle = ((index / options.length / 3) * 2 * Math.PI + Math.PI / 2) * -1;
        }
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <Animated.View
            key={index}
            entering={BounceIn.delay(index * 100)}
            style={{
              position: 'absolute',
              left: x,
              top: y,
            }}>
            <TouchableHighlight
              onPress={onOptionPress}
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                backgroundColor: selectedOption === optionValue ? '#ffffff' : '#ffffff30',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: selectedOption === optionValue ? 'black' : 'white',
                  fontWeight: '600',
                }}>
                {optionValue}x
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
        <Text style={{ color: 'black', fontWeight: '600' }}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedCameraButton;
