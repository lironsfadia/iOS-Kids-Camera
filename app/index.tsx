import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

const description = `
# Holga Camera App
Capture the essence of lo-fi photography with our Holga Camera App`;

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Home' }} />
      <View style={styles.content}>
        <Text style={styles.title}>Holga Camera App</Text>
        <Text style={styles.description}>{description}</Text>
        <Link href="/camera" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Go to Camera</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e', // Dark background
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#cccccc',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
