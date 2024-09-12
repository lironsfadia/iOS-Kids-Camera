import React from 'react';

interface FlashlightControlProps {
  isOn: 'on' | 'off';
  toggleFlashlight: (mode: 'on' | 'off') => void;
}

const FlashlightControl = ({ isOn, toggleFlashlight }: FlashlightControlProps) => {
  const icon = isOn === 'on' ? 'flashlight' : 'flashlight-outline';

  const onToggleFlashlight = () => {
    console.log('Toggling flashlight', isOn);
    toggleFlashlight(isOn === 'on' ? 'off' : 'on');
  };

  return { icon, onToggleFlashlight };
};

export default FlashlightControl;
