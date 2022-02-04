import React from 'react';
import { Animated, StyleSheet, Text, TextStyle, TouchableHighlight } from 'react-native';
import { useTheme } from 'react-native-paper';
import { ColorStatusTheme } from '../appearance';
import { LetterStatus } from '../types';

export interface LetterButtonProps {
  disabled?: boolean;
  onPress?: () => void;
  title: string;
  status?: LetterStatus;
}

export const LetterButton: React.FC<LetterButtonProps> = ({
  disabled = false,
  onPress,
  status = 'available',
  title,
}) => {
  const { roundness } = useTheme();
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

  const commonStyles: TextStyle = {
    borderRadius: roundness,
    overflow: 'hidden',
  };

  return (
    <Animated.View style={[{ transform: [{ scale }] }]}>
      <TouchableHighlight
        disabled={disabled}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
        style={[styles.container, { borderRadius: roundness }]}
        underlayColor={ColorStatusTheme[status].backgroundColor}
      >
        {/* @TODO: Update text to import { Text } from './Text'; */}
        <Text style={[styles.content, commonStyles, ColorStatusTheme[status]]}>{title}</Text>
      </TouchableHighlight>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {},
  content: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
    width: 35,
  },
});
