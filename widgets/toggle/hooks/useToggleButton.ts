import { Animated, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';

interface useToggleButtonProps {
  initialState: boolean;
}

const useToggleButton = ({ initialState }: useToggleButtonProps) => {
  /* 
      We’re using the useRef hook above to create the animation 
      object. It will, according to the hooks API reference, 
      persist for the lifetime of the component. 
      That means React will only create the passed value once. 
      Later calls, updating the component, will not recreate the 
      animation value. This is essential as we want visual 
      appearance to be in sync with our toggled state.

      metaphors for the toggle. 0 means the toggle is off and 1 means 
      that it’s toggled on.
    */
  const animation = useRef(new Animated.Value(!!initialState ? 1 : 0)).current;
  const [toggled, setToggled] = useState(!!initialState);
  const [containerWidth, setContainerWidth] = useState(0);

  return { animation, toggled, setToggled, containerWidth, setContainerWidth };
};

export default useToggleButton;

const styles = StyleSheet.create({});
