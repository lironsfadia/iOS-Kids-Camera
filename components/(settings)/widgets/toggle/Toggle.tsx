import React, { useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ToggleButton = ({ onPress, initialState = false }) => {
  const [isOn, setIsOn] = useState(initialState);
  const [animation] = useState(new Animated.Value(initialState ? 1 : 0));

  const toggle = () => {
    setIsOn(!isOn);
    Animated.timing(animation, {
      toValue: isOn ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    onPress(!isOn);
  };

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#D1D5DB', '#10B981'],
  });

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  return (
    <TouchableOpacity onPress={toggle} activeOpacity={0.8}>
      <Animated.View style={[styles.container, { backgroundColor }]}>
        <Animated.View style={[styles.knob, { transform: [{ translateX }] }]}>
          <AntDesign
            name={isOn ? 'camera' : 'camerao'}
            size={16}
            color={isOn ? '#10B981' : '#4B5563'}
          />
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 30,
    borderRadius: 15,
    padding: 2,
  },
  knob: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ToggleButton;
