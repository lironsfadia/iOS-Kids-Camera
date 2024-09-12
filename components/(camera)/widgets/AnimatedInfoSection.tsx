import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CameraInfoOverlay = ({ device, batteryInfo }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const toggleExpand = () => {
    const toValue = isExpanded ? 0 : 1;
    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(animatedOpacity, {
        toValue,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
    setIsExpanded(!isExpanded);
  };

  const maxHeight = animatedHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // Adjust based on content
  });

  const renderInfoItem = (key, value) => (
    <View key={key} className="flex-row items-center justify-between py-1">
      <Text className="text-xs text-white text-opacity-80">{key}</Text>
      <Text className="text-xs font-medium text-white">
        {typeof value === 'boolean' ? value.toString() : value}
      </Text>
    </View>
  );

  return (
    <View className="absolute bottom-1 left-4 right-4">
      <TouchableOpacity
        onPress={toggleExpand}
        className="flex-row items-center justify-between rounded-full bg-black bg-opacity-50 px-4 py-2">
        <Text className="text-sm font-medium text-white">Camera Info</Text>
        <Ionicons name={isExpanded ? 'chevron-down' : 'chevron-up'} size={20} color="white" />
      </TouchableOpacity>
      <Animated.View
        style={{ maxHeight, opacity: animatedOpacity }}
        className="mt-2 overflow-hidden rounded-lg bg-black bg-opacity-50">
        <View className="p-4">
          {renderInfoItem('FPS', device.formats[0].maxFps)}
          {renderInfoItem(
            'Resolution',
            `${device.formats[0].photoWidth}x${device.formats[0].photoHeight}`
          )}
          {renderInfoItem('Camera', device.name)}
          {batteryInfo &&
            Object.entries(batteryInfo).map(([key, value]) => renderInfoItem(key, value))}
        </View>
      </Animated.View>
    </View>
  );
};

export default CameraInfoOverlay;
