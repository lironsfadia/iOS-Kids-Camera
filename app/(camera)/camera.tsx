import React from 'react';

import { CameraProvider } from '../../contexts/cameraContext';
import CameraScreenContent from '~/components/(camera)/components/CameraScreenContent';

const CameraScreen = () => (
  <CameraProvider>
    <CameraScreenContent />
  </CameraProvider>
);

export default CameraScreen;
