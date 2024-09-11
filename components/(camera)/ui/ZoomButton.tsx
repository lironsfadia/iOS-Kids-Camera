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
  const { onPressZoomControls, containerStyle, handleZoomPress, buttonTitleFormat } = ZoomControls({
    zoom,
    handleZoom,
    handleShowZoomControls,
  });

  return (
    <>
      <FuncCameraButton title={'+/-'} onPress={onPressZoomControls} />

      {showZoomControls ? (
        <AnimatedCameraButton
          buttonTitleFormat={buttonTitleFormat}
          options={ZOOM_OPTIONS}
          onPress={onPressZoomControls}
          handleOptionsPress={handleZoomPress}
          selectedOption={zoom}
          containerStyle={containerStyle}
        />
      ) : null}
    </>
  );
};

export default ZoomButton;
