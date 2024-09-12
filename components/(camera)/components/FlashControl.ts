import { useCallback, useMemo } from 'react';

import { FlashControlProps } from './types';

const FlashControl = ({ mode, setMode }: FlashControlProps) => {
  const onPress = useCallback(() => {
    const newMode = mode === 'on' ? 'off' : 'on';
    setMode(newMode);
  }, [mode]);

  const flashIcon = useMemo(() => {
    return mode === 'on' ? 'flash-outline' : 'flash-off-outline';
  }, [mode]);

  return { flashIcon, onPress };
};

export default FlashControl;
