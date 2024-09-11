const permissions = [
  {
    name: 'Camera',
    description: 'Used for taking photos and videos.',
    icon: 'camera',
    value: isCameraPermissionSet,
    requestHandler: handleCameraRequest,
  },
  {
    name: 'Microphone',
    description: 'Used for recording videos.',
    icon: 'mic-circle-outline',
    value: isMicPermissionSet,
    requestHandler: handleMicRequest,
  },
  {
    name: 'Media Library',
    description: 'Used for saving, viewing and more.',
    icon: 'library-outline',
    value: isMediaLibPermissionSet,
    requestHandler: handleMediaLibRequest,
  },
];

export { permissions };
