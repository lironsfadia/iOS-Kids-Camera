import React from 'react';
import {
  Animated,
  LayoutChangeEvent,
  StyleSheet,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import useToggleButton from './hooks/useToggleButton';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ToggleButtonProps {
  onPress: () => void;
  initialState: boolean;
  initText: string;
  destText: string;
  buttonWidth?: number;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onPress,
  initialState,
  initText,
  destText,
  buttonWidth,
}) => {
  const { animation, toggled, setToggled, containerWidth, setContainerWidth } =
    useToggleButton({ initialState });

  const onLayout = (event: LayoutChangeEvent) => {
    if (buttonWidth) {
      setContainerWidth(buttonWidth);
      return;
    }
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const dynamicStyles = {
    container: (animation: Animated.Value): ViewStyle => ({
      alignItems: 'center',
      backgroundColor: animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['blue', 'pink'],
      }) as any,
      borderRadius: 25,
      height: 50,
      justifyContent: 'center',
      paddingHorizontal: 57,
      width: containerWidth,
    }),
    text: (inverted: boolean, animation: Animated.Value): TextStyle => ({
      opacity: animation.interpolate({
        inputRange: [0, 1],
        outputRange: inverted ? [1, 0] : [0, 1],
      }) as any,
      transform: [{ translateY: inverted ? 13 : -13 }],
    }),
    icon: (animation: Animated.Value): ViewStyle => ({
      opacity: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
      }) as any,
    }),
  };

  const Knob: React.FC<{ icon: string }> = ({ icon }) => (
    <View style={styles.icon}>
      <AntDesign name={icon} size={24} color="black" />
    </View>
  );

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // colors
        setToggled(!toggled);
        Animated.timing(animation, {
          duration: 300,
          toValue: toggled ? 0 : 1,
          useNativeDriver: false,
        }).start();
        onPress();
      }}
    >
      <Animated.View
        style={dynamicStyles.container(animation)}
        onLayout={onLayout}
      >
        <Animated.Text style={[dynamicStyles.text(true, animation)]}>
          {destText}
        </Animated.Text>
        <Animated.Text
          style={[dynamicStyles.text(false, animation), styles.textToggled]}
        >
          {initText}
        </Animated.Text>
        <Animated.View
          style={[
            styles.knob,
            {
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, containerWidth - 50],
                  }),
                },
              ],
            } as any,
          ]}
        >
          <Animated.View style={dynamicStyles.icon(animation)}>
            <Knob icon="check" />
          </Animated.View>
          <Animated.View
            style={[dynamicStyles.icon(animation), { opacity: animation }]}
          >
            <Knob icon="close" />
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
  textToggled: {
    // Add your styles for the toggled text here
  },
  knob: {
    position: 'absolute',
    left: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -10,
  },
});
