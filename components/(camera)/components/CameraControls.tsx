import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { useFocusEffect } from 'expo-router';

import {
  TakePhotoOptions,
  PhotoFile,
  VideoFile,
  useCameraDevice,
  Camera,
  useCodeScanner,
  getCameraFormat,
  Templates,
  useFrameProcessor,
} from 'react-native-vision-camera';

import RTNBatteryStatus from 'rtn-battery-status/js/NativeBatteryStatus';
import { BatteryInfo, CameraControlsOutputs } from './types';

const CameraControls = (): CameraControlsOutputs => {
  const [flashMode, setFlashMode] = useState<TakePhotoOptions['flash']>('off' as const);

  if (!flashMode) {
    setFlashMode('off');
  }

  const [torch, setTorch] = useState('off');
  const [isRecording, setIsRecording] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [photo, setPhoto] = useState<PhotoFile | null>(null);
  const [video, setVideo] = useState<VideoFile | null>(null);
  const [cameraPosition, setCameraPosition] = useState<'back' | 'front'>('back' as const);
  const exposure = useRef(0);

  // telephoto-camera - is the default camera
  const device = useCameraDevice(cameraPosition, {
    physicalDevices: ['ultra-wide-angle-camera'],
  });
  const camera = useRef<Camera>(null);
  const [cameraMode, setCameraMode] = useState<'camera' | 'qr'>('camera');
  const [error, setError] = useState<string | null>(null);
  const [uiRotation, setUiRotation] = useState(0);
  const [zoom, setZoom] = useState(device?.neutralZoom);
  const [showZoomControls, setShowZoomControls] = useState(false);
  const [showExposureControls, setShowExposureControls] = useState(false);
  const [batteryInfo, setBatteryInfo] = useState<BatteryInfo | undefined>(undefined);

  useEffect(() => {
    const checkBattery = async () => {
      try {
        const batteryInfo = await RTNBatteryStatus?.getBatteryInfo();
        const isCharging = await RTNBatteryStatus?.isCharging();

        setBatteryInfo({ ...batteryInfo, isCharging });
      } catch (error) {
        console.error('Error checking battery status:', error);
      }
    };

    checkBattery();
  }, []);

  const format = device
    ? getCameraFormat(
        device,
        //Templates.FrameProcessing // or Templates.Snapchat
        [
          //{ videoAspectRatio: 16 / 9 },
          //{ videoResolution: { width: 3048, height: 2160 } },
          //{ fps: 60 },
          //{ videoResolution: 'max' },
        ]
      )
    : undefined;

  const onError = useCallback((error) => {
    console.error('Camera error:', error);
    setError(error);
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (data) => {
      console.log('Scanned data:', data);
    },
  });

  const onTakePhotoPressed = async () => {
    try {
      if (camera.current) {
        const photo = await camera.current?.takePhoto({
          flash: flashMode,
          enableShutterSound: true,
        });
        console.log('Photo taken:', photo);
        if (photo) {
          console.log('Photo taken:');
          setPhoto(photo);
        }
      } else {
        throw new Error('Camera not initialized');
      }
    } catch (error) {
      console.warn('Failed to take photo:', error);
    }
  };

  const onStartRecording = async () => {
    if (!camera.current) return;
    setIsRecording(true);
    console.log('Start recording');
    camera.current?.startRecording({
      flash: flashMode === 'on' ? 'on' : 'off',
      onRecordingFinished: (video) => {
        console.log('Video recorded:', video);
        setIsRecording(false);
        setVideo(video);
      },
      onRecordingError: (error) => {
        console.error('Recording error:', error);
        setIsRecording(false);
      },
    });
  };
  const uploadPhoto = async () => {
    if (hasPermissions) {
      const photoPath = photo?.path ?? '';
      console.log({ photoPath });
      try {
        const result = await CameraRoll.save(photoPath, { type: 'photo' });
        console.log({ result });
        console.log('Photo saved successfully:', result);
      } catch (error) {
        console.error('Failed to save photo:', error);
      }
    }
  };

  const clearError = () => {
    setError(null);
  };

  useFocusEffect(
    useCallback(() => {
      setIsActive(true);
      return () => setIsActive(false);
    }, [])
  );

  // const frameProcessor = useCallback(
  //   (frame) => {
  //     "worklet";
  //     // Apply filter adjustments here
  //     frame.brightness = brightness.value;
  //     frame.saturation = saturation.value;
  //     frame.contrast = contrast.value;
  //     runOnJS(setCurrentFilter)(currentFilter);
  //   },
  //   [brightness, saturation, contrast, currentFilter]
  // );

  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet';
  //   const objects = scanFaces(frame);
  //   const label = objects[0].name;
  //   console.log(`You're looking at a ${label}.`);
  // }, []);

  return {
    flashMode,
    setFlashMode,
    isActive,
    setIsActive,
    photo,
    setPhoto,
    video,
    setVideo,
    device,
    onTakePhotoPressed,
    onStartRecording,
    codeScanner,
    setCameraMode,
    cameraMode,
    camera,
    isRecording,
    onError,
    error,
    setUiRotation,
    uiRotation,
    format,
    uploadPhoto,
    zoom,
    torch,
    setTorch,
    cameraPosition,
    setCameraPosition,
    showZoomControls,
    setShowZoomControls,
    showExposureControls,
    setShowExposureControls,
    batteryInfo,
    exposure: exposure.current,
    //frameProcessor,
  };
};

export default CameraControls;
