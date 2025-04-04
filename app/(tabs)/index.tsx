// filepath: /home/adam-noah/nextnoetic/app/(tabs)/index.tsx
import { Image, StyleSheet, Platform, Button } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Next Vacation</ThemedText>
        <ThemedText type="subtitle">Login or Sign up!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Button title="Login" onPress={() => { }} />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <Button title="Sign Up" onPress={() => { }} />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});