import { StyleSheet } from 'react-native';
import { useCaptureButtonProps } from '../components/types';

export default function useCaptureButton({
  uiRotation,
  isRecording,
}: useCaptureButtonProps) {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: 50,
    },
    uiRotate90: {
      position: 'absolute',
      left: 20,
      bottom: '50%',
    },
    uiRotate180: {
      position: 'absolute',
      alignSelf: 'center',
      top: 50,
    },
    uiRotate270: {
      position: 'absolute',
      right: 20,
      top: '50%',
    },
    button: {
      width: 75,
      height: 75,
      borderRadius: 75,
    },
  });
  const computedUiRotation = uiRotation > 0 ? uiRotation : uiRotation + 360;
  const buttonStyles = StyleSheet.compose(
    { backgroundColor: isRecording ? 'red' : 'white' },
    styles.button
  );

  const getContainerStyle = () => {
    switch (computedUiRotation) {
      case 90:
        return styles.uiRotate90;
      case 180:
        return styles.uiRotate180;
      case 270:
        return styles.uiRotate270;
      default:
        return styles.container;
    }
  };

  const containerStyle = [
    getContainerStyle(),
    { transform: [{ rotate: `${uiRotation}deg` }] },
  ];

  return { containerStyle, buttonStyles };
}
