import React from 'react';
import { Animated, StyleSheet, Text, TextStyle, TouchableHighlight } from 'react-native';
import { useTheme } from 'react-native-paper';
import { ColorStatusTheme } from '../appearance';
import { LetterStatus } from '../types';
import { createBtnAnim } from '../utils';

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
  const { onPressIn, onPressOut, scale } = createBtnAnim(buttonAnim);

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
        <Text style={[styles.content, commonStyles, ColorStatusTheme[status]]}>{title}</Text>
      </TouchableHighlight>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 3,
  },
  content: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
    width: 35,
  },
});
