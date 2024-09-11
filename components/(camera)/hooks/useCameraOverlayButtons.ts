import { StyleSheet, ViewStyle } from 'react-native';
import { useCallback, useMemo } from 'react';

interface CameraOverlayButtonsProps {
  cameraModeHandler: (mode: 'camera' | 'qr') => void;
  uiRotation: number;
}

export default function useCameraOverlayButtons({
  cameraModeHandler,
  uiRotation,
}: CameraOverlayButtonsProps) {
  const uiStyle: ViewStyle = useMemo(
    () => ({
      transform: [{ rotate: `${uiRotation}deg` }],
    }),
    [uiRotation]
  );

  const containerStyle = useMemo(
    () => StyleSheet.compose(styles.container, uiStyle),
    [uiStyle]
  );

  const handleCameraMode = useCallback(() => cameraModeHandler('qr'), []);

  return {
    containerStyle,
    handleCameraMode,
  };
}

const styles = StyleSheet.create({
  // flex-direction: row, align-items: center, justify-content: space-between
  container: { position: 'absolute', alignSelf: 'center', top: 50, left: 20 },
});
