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
