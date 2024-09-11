import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera, VideoFile } from 'react-native-vision-camera';

interface VideoPlayerProps {
  device: any;
  camera: any;
  videoHandler: (video: VideoFile) => void;
}

const VideoPlayer = ({ device, camera }: VideoPlayerProps) => {
  /** camera.current?.stopRecording();
      setIsRecording(false);
      setVideo(video); */

  return (
    <View>
      <Camera
        camera={camera}
        style={styles.video}
        video={true}
        audio={true}
        device={device}
        isActive={false}
      />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: { flex: 1 },
});
