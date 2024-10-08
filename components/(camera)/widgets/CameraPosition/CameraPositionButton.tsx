import FlashlightControl from '../FlashLight/FlashlightControl';
import FuncCameraButton from '../../ui/FuncCameraButton';

interface CameraPositionButtonProps {
  position: 'back' | 'front';
  togglePosition: (position: 'back' | 'front') => void;
}

const CameraPositionButton = ({ position, togglePosition }: CameraPositionButtonProps) => {
  const onPress = () => {
    togglePosition(position === 'back' ? 'front' : 'back');
  };
  const icon = position === 'back' ? 'camera-reverse-outline' : 'camera-outline';
  return <FuncCameraButton icon={icon} onPress={onPress} containerStyle={'bg-white'} />;
};

export default CameraPositionButton;
