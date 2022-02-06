import { Animated } from 'react-native';

export function createBtnAnim(buttonAnim: Animated.Value) {
  const inputRange = [0, 1];
  const outputRange = [1, 0.9];
  const scale = buttonAnim.interpolate({ inputRange, outputRange });

  const onPressIn = () => {
    Animated.spring(buttonAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(buttonAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return {
    scale,
    onPressIn,
    onPressOut: () => setTimeout(onPressOut, 100),
  };
}

export const startShakeAnimation = (shakeAnimation: Animated.Value) => {
  Animated.sequence([
    Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
    Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
    Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
    Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true }),
  ]).start();
};

export function createFlipAnim(flipAnimation: Animated.Value) {
  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [
      {
        rotateX: frontInterpolate,
      },
    ],
  };
  const backAnimatedStyle = {
    transform: [
      {
        rotateX: backInterpolate,
      },
    ],
  };

  const flipCard = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  return {
    backAnimatedStyle,
    frontAnimatedStyle,
    flipCard,
  };
}
