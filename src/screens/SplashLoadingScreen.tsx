import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { GutterSizes, lightColors } from '../appearance';
import { Text } from '../components';

export const SplashLoadingScreen: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={require('../appearance/images/wordle.png')} resizeMethod='resize' style={styles.image} />
    </View>
    <View style={styles.version}>
      <ActivityIndicator animating={true} color={lightColors.success.background} />
      <Text gutters={{ top: 'md' }} size='sm'>
        Version 1.0.0
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: GutterSizes.xl,
  },
  imageContainer: {},
  image: {
    height: 96,
    resizeMode: 'contain',
    width: 320,
  },
  version: {
    position: 'absolute',
    bottom: GutterSizes.xl,
  },
});
