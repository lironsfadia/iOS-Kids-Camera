import { useCallback, useMemo, useState } from 'react';
import { MAX_ZOOM, MIN_ZOOM, NATURAL_ZOOM } from '../constants';

interface ZoomControlsProps {
  handleZoom: (zoom: number) => void;
  handleShowZoomControls: (show: boolean) => void;
  zoom: number | undefined;
}
const ZoomControls = ({
  handleZoom,
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
      alignSelf: 'center',
    };
  }, []);

  const onPressZoomControls = useCallback(
    (show: boolean) => {
      handleShowZoomControls(!show);
    },
    [handleShowZoomControls]
  );
  return {
    onPressZoomControls,
    containerStyle,
    buttonTitleFormat,
    handleZoomPress,
  };
};

export default ZoomControls;
