import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface InspirationButtonProps {
  photoPath: string;
}

const InspirationButton: React.FC<InspirationButtonProps> = ({ photoPath }) => {
  const router = useRouter();
  const onPress = () => {
    router.push({
      pathname: '/media',
      params: { media: photoPath, type: 'photo' },
    });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>'Inspiration'</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InspirationButton;
