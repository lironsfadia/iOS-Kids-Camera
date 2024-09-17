import React from 'react';

import ZoomControls from '../components/ZoomControls';
import { ZOOM_OPTIONS } from '../constants';
import FuncCameraButton from './FuncCameraButton';
import AnimatedCameraButton from './AnimatedCameraButton';

interface ZoomButtonProps {
  handleZoom: (zoom: number) => void;
  handleShowZoomControls: (show: boolean) => void;
  showZoomControls: boolean;
  zoom: number | undefined;
}

const ZoomButton = ({
  handleZoom,
  showZoomControls,
  handleShowZoomControls,
  zoom,
}: ZoomButtonProps) => {
  const { onPressZoomControls, handleZoomPress, buttonTitleFormat } = ZoomControls({
    zoom,
    handleZoom,
    showZoomControls,
    handleShowZoomControls,
  });

  return (
    <>
      <FuncCameraButton
        title="+/-"
        onPress={onPressZoomControls}
        containerStyle={'w-30 h-30 bg-gray-800'}
      />

      {showZoomControls ? (
        <AnimatedCameraButton
          buttonTitleFormat={buttonTitleFormat}
          options={ZOOM_OPTIONS}
          onPress={onPressZoomControls}
          handleOptionsPress={handleZoomPress}
          selectedOption={zoom}
          containerStyle={'absolute bottom-3 left-0 right-0 items-center justify-center'}
          side="left"
        />
      ) : null}
    </>
  );
};

export default ZoomButton;
