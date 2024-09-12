import { View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { ICON_SIZE } from '../../(camera)/constants';
import { ThemedText } from '~/components/ThemedText';
import useThemeColor from '~/constants/Colors';
import { Switch } from '~/components/ui/switch';

interface PermissionBoxProps {
  title: string;
  text: string;
  icon: string;
  switchValue: boolean | undefined;
  onToggle: () => void;
}

const PermissionBox = ({ title, text, icon, switchValue, onToggle }: PermissionBoxProps) => {
  const theme = useThemeColor();

  return (
    <View className="border-r-10 flex-row items-center justify-between gap-10 bg-gray-800 p-2">
      <View className="flex-1 flex-row items-center gap-5">
        <Ionicons name={icon} size={ICON_SIZE} color={theme.icon} />
        <View className="flex-col">
          <ThemedText type="subtitle">{title}</ThemedText>
          <ThemedText>{text}</ThemedText>
        </View>
      </View>

      <Switch
        value={switchValue}
        onToggle={onToggle}
        trackColor={{
          false: theme.switch.trackActive,
          true: theme.switch.trackActive,
        }}
      />
    </View>
  );
};

export default PermissionBox;
