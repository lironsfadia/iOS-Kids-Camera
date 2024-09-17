import { useCallback, useMemo, useState } from 'react';
import { MAX_ZOOM, MIN_ZOOM, NATURAL_ZOOM } from '../constants';

interface ZoomControlsProps {
  zoom: number | undefined;
  showZoomControls: boolean;
  handleZoom: (zoom: number) => void;
  handleShowZoomControls: (show: boolean) => void;
}

const ZoomControls = ({
  handleZoom,
  showZoomControls,
  handleShowZoomControls,
  zoom,
}: ZoomControlsProps) => {
  const buttonTitleFormat = useMemo(() => {
    return zoom && zoom > 0 ? '+{0}' : '{0}';
  }, [zoom]);

  const handleZoomPress = useCallback((zoomFactor: number) => {
    if (zoomFactor === -1) {
      // RESET TO THE NATURAL ZOOM
      handleZoom(NATURAL_ZOOM);
    } else {
      handleZoom(Math.min(Math.max(zoomFactor, MIN_ZOOM), MAX_ZOOM));
    }
  }, []);

  const containerStyle = useMemo(() => {
    return {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      alignItems: 'center',
    };
  }, []);

  const onPressZoomControls = useCallback(() => {
    handleShowZoomControls(!showZoomControls);
  }, [handleShowZoomControls, showZoomControls]);

  return {
    onPressZoomControls,
    containerStyle,
    buttonTitleFormat,
    handleZoomPress,
  };
};

export default ZoomControls;
