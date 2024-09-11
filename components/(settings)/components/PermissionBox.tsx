import { StyleSheet, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { ICON_SIZE } from '../../(camera)/constants';
import { ThemedText } from '~/components/ThemedText';
import useThemeColor from '~/constants/Colors';
import { Switch } from '~/components/ui/switch';

interface PermissionBoxProps {
  title: string;
  text: string;
  icon: string;
  switchValue: boolean;
  onToggle: () => void;
}

const PermissionBox = ({ title, text, icon, switchValue, onToggle }: PermissionBoxProps) => {
  const theme = useThemeColor();

  return (
    <View style={StyleSheet.compose(styles.row, styles.container)}>
      <View style={StyleSheet.compose(styles.row, styles.content)}>
        <Ionicons name={icon} size={ICON_SIZE} color={theme.icon} />
        <View style={styles.text}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff20',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
  },
  text: { flexDirection: 'column' },
  content: { alignItems: 'center', gap: 10 },
});
