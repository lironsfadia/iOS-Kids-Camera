import { TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface SettingsButtonProps {
  iconColor: string;
}

const SettingsButton = ({ iconColor }: SettingsButtonProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="top-13 absolute right-3 p-1"
      onPress={() => router.push('/settings')}>
      <Ionicons name="settings-outline" size={24} color={iconColor} />
    </TouchableOpacity>
  );
};

export default SettingsButton;
