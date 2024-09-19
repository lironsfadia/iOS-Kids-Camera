import React, { createContext, useContext } from 'react';

import CameraControls from '~/components/(camera)/components/CameraControls';
import { CameraControlsOutputs } from '~/components/(camera)/components/types';

const CameraContext = createContext({} as CameraControlsOutputs);

export const CameraProvider = ({ children }) => {
  const cameraControls = CameraControls();

  return <CameraContext.Provider value={cameraControls}>{children}</CameraContext.Provider>;
};

export const useCamera = () => {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error('useCamera must be used within a CameraProvider');
  }
  return context;
};
