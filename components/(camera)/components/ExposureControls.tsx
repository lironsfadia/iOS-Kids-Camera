import { useCallback, useMemo, useState } from 'react';
import {
  MAX_ZOOM,
  MIN_ZOOM,
  NATURAL_ZOOM,
  IOS_EXPOSURE_OPTIONS,
  ANDROID_EXPOSURE_OPTIONS,
} from '../constants';
import { Platform } from 'react-native';

interface ExposureControlsProps {
  handleExposure: (exposure: number) => void;
  handleShowExposureControls: (show: boolean) => void;
  exposure: number | undefined;
  showExposureControls: boolean;
}
const ExposureControls = ({
  handleExposure,
  handleShowExposureControls,
  exposure,
  showExposureControls,
}: ExposureControlsProps) => {
  const exposureOptions = useMemo(() => {
    return Platform.OS === 'ios' ? IOS_EXPOSURE_OPTIONS : ANDROID_EXPOSURE_OPTIONS;
  }, []);

  const buttonTitle = useMemo(() => {
    return `x${exposure}`;
  }, []);

  const handleExposurePress = useCallback((zoomFactor: number) => {
    if (zoomFactor === -1) {
      // RESET TO THE NATURAL ZOOM
      handleExposure(NATURAL_ZOOM);
    } else {
      handleExposure(Math.min(Math.max(zoomFactor, MIN_ZOOM), MAX_ZOOM));
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
