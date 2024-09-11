import FlashlightControl from '../components/FlashlightControl';
import FuncCameraButton from './FuncCameraButton';

interface FlashlightButtonProps {
  isOn: boolean;
  toggleFlashlight: () => void;
}

const FlashlightButton = ({
  isOn,
  toggleFlashlight,
}: FlashlightButtonProps) => {
  const { icon, onToggleFlashlight } = FlashlightControl({
    isOn,
    toggleFlashlight,
  });

  return <FuncCameraButton icon={icon} onPress={onToggleFlashlight} />;
};

export default FlashlightButton;
