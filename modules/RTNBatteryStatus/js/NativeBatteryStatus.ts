import { TurboModule, TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getBatteryLevel(): Promise<number>;
  isCharging(): Promise<boolean>;
  getBatteryInfo(): Promise<{
    level: number;
    state: string;
    lowPowerMode: boolean;
  }>;
}

export default TurboModuleRegistry.get<Spec>('RTNBatteryStatus') as Spec | null;
