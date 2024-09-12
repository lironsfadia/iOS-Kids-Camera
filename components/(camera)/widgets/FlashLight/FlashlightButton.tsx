import FlashlightControl from './FlashlightControl';
import FuncCameraButton from '../../ui/FuncCameraButton';
import { FlashlightButtonProps } from './types';

const FlashlightButton = ({ isOn, toggleFlashlight }: FlashlightButtonProps) => {
  const { icon, onToggleFlashlight } = FlashlightControl({
    isOn,
    toggleFlashlight,
  });

  return <FuncCameraButton icon={icon} onPress={onToggleFlashlight} />;
};

export default FlashlightButton;
