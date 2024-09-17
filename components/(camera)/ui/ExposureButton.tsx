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
  const { onPressExposureControls, handleExposurePress, exposureOptions, buttonTitle } =
    ExposureControls({
      handleExposure,
      handleShowExposureControls,
      exposure,
      showExposureControls,
    });

  return (
    <>
      <FuncCameraButton
        title={buttonTitle}
        onPress={onPressExposureControls}
        containerStyle={{ width: 30, height: 30, borderRadius: 20, backgroundColor: 'grey' }}
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
