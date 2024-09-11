import React from 'react';

interface FlashlightControlProps {
  isOn: boolean;
  toggleFlashlight: (mode: 'on' | 'off') => void;
}

const FlashlightControl = ({
  isOn,
  toggleFlashlight,
}: FlashlightControlProps) => {
  const icon = isOn ? 'flashlight' : 'flashlight-off';

  const onToggleFlashlight = () => {
    toggleFlashlight(isOn ? 'off' : 'on');
  };

  return { icon, onToggleFlashlight };
};

export default FlashlightControl;
