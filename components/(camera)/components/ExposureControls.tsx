import { useCallback, useMemo, useState } from 'react';
import {
  MAX_ZOOM,
  MIN_ZOOM,
  NATURAL_ZOOM,
  IOS_EXPOSURE_OPTIONS,
  ANDROID_EXPOSURE_OPTIONS,
  DEFAULT_EXPOSURE,
} from '../constants';
import { Platform } from 'react-native';

interface ExposureControlsProps {
  handleShowExposureControls: (show: boolean) => void;
  exposure: number | undefined;
  showExposureControls: boolean;
  handleExposure: (exposure: number) => void;
}

const ExposureControls = ({
  handleShowExposureControls,
  exposure,
  showExposureControls,
  handleExposure,
}: ExposureControlsProps) => {
  const exposureOptions = useMemo(() => {
    return Platform.OS === 'ios' ? IOS_EXPOSURE_OPTIONS : ANDROID_EXPOSURE_OPTIONS;
  }, []);

  const buttonTitle = useMemo(() => {
    return `x${exposure}`;
  }, [exposure]);

  const handleExposurePress = useCallback((newExposure: string) => {
    if (Number(newExposure) === -1) {
      handleExposure(DEFAULT_EXPOSURE);
    } else {
      handleExposure(Number(newExposure));
    }
  }, []);

  const onPressExposureControls = useCallback(() => {
    handleShowExposureControls(!showExposureControls);
  }, [handleShowExposureControls, showExposureControls]);

  return {
    exposureOptions,
    onPressExposureControls,
    handleExposurePress,
    buttonTitle,
  };
};

export default ExposureControls;
