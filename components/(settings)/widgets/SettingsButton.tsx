import { TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';

interface SettingsButtonProps {
  iconColor: string;
}

const SettingsButton = ({ iconColor }: SettingsButtonProps) => {
  const router = useRouter();
  const handlePress = useCallback(() => {
    router.push('/settings');
  }, [router]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Ionicons name="settings-outline" size={24} color={iconColor} />
    </TouchableOpacity>
  );
};

export default SettingsButton;
