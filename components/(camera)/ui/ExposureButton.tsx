import React from 'react';

import ExposureControls from '../components/ExposureControls';
import FuncCameraButton from './FuncCameraButton';
import AnimatedCameraButton from './AnimatedCameraButton';

interface ExposureButtonProps {
  handleExposure: (exposure: number) => void;
  showExposureControls: boolean;
  exposure: number | undefined;
  handleShowExposureControls: (show: boolean) => void;
}

const ExposureButton = ({
  handleExposure,
  handleShowExposureControls,
  exposure,
  showExposureControls,
}: ExposureButtonProps) => {
  const {
    onPressExposureControls,
    containerStyle,
    handleExposurePress,
    exposureOptions,
    buttonTitle,
  } = ExposureControls({
    handleExposure,
    handleShowExposureControls,
    exposure,
  });

  return (
    <>
      <FuncCameraButton title={buttonTitle} onPress={onPressExposureControls} />

      {showExposureControls ? (
        <AnimatedCameraButton
          buttonTitleFormat="x{0}"
          options={exposureOptions}
          onPress={onPressExposureControls}
          handleOptionsPress={handleExposurePress}
          selectedOption={exposure}
          containerStyle={containerStyle}
        />
      ) : null}
    </>
  );
};

export default ExposureButton;
