import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Button as RNPButton, useTheme } from 'react-native-paper';

export interface ButtonProps {
  disabled?: boolean;
  onPress: () => void;
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ disabled = false, onPress, title }) => {
  const { colors } = useTheme();
  const buttonAnim = new Animated.Value(0);
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

  const handlePress = () => {
    if (!disabled) {
      onPressIn();
      setTimeout(() => {
        onPressOut();
        onPress();
      }, 50);
    }
  };

  const labelStyle = {
    color: colors.success.text,
    fontSize: 24,
    opacity: disabled ? 0.75 : 1,
  };

  return (
    <Animated.View style={[{ transform: [{ scale }] }]}>
      <RNPButton
        uppercase
        color={disabled ? colors.success.disabled : colors.success.background}
        labelStyle={labelStyle}
        onPress={handlePress}
        mode='contained'
        theme={{
          roundness: 15,
          colors: {
            disabled: colors.success.disabled,
          },
        }}
        contentStyle={styles.container}
      >
        {title}
      </RNPButton>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
