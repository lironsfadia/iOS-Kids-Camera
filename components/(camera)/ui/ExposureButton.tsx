import React from 'react';

import ExposureControls from '../components/ExposureControls';
import FuncCameraButton from './FuncCameraButton';
import AnimatedCameraButton from './AnimatedCameraButton';

interface ExposureButtonProps {
  showExposureControls: boolean;
  exposure: number | undefined;
  handleShowExposureControls: (show: boolean) => void;
  handleExposure: (exposure: number) => void;
}

const ExposureButton = ({
  handleShowExposureControls,
  exposure,
  showExposureControls,
  handleExposure,
}: ExposureButtonProps) => {
  const { onPressExposureControls, handleExposurePress, exposureOptions, buttonTitle } =
    ExposureControls({
      handleShowExposureControls,
      exposure,
      showExposureControls,
      handleExposure,
    });

  return (
    <>
      <FuncCameraButton
        title={buttonTitle}
        onPress={onPressExposureControls}
        containerStyle={'bg-gray-800 w-50 h-50'}
      />

      {showExposureControls ? (
        <AnimatedCameraButton
          buttonTitleFormat="x{0}"
          options={exposureOptions}
          onPress={onPressExposureControls}
          handleOptionsPress={handleExposurePress}
          selectedOption={exposure}
          side="right"
          containerStyle={'absolute right-10 items-center justify-start bg-gray-800 rounded-2xl'}
        />
      ) : null}
    </>
  );
};

export default ExposureButton;
