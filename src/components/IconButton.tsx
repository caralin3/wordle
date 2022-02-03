import React from 'react';
import { Animated } from 'react-native';
import { IconButton as RNPIconButton, Colors, useTheme } from 'react-native-paper';
import { createBtnAnim } from '../utils';

export interface IconButtonProps {
  color?: string;
  height?: number;
  iconName: string;
  onPress?: () => void;
  size?: number;
  width?: number;
}

export const IconButton: React.FC<IconButtonProps> = ({ color, height, iconName, onPress, size, width }) => {
  const { colors, roundness } = useTheme();
  const buttonAnim = new Animated.Value(0);
  const btnSpringAnim = createBtnAnim(buttonAnim);

  const handlePress = () => {
    btnSpringAnim.onPressIn();
    btnSpringAnim.onPressOut();
    if (!!onPress) {
      onPress();
    }
  };

  const buttonStyle: any = {
    backgroundColor: color ? color : colors.gray,
    borderRadius: roundness,
  };

  if (!!height) {
    buttonStyle.height = height;
  }

  if (!!width) {
    buttonStyle.width = width;
  }

  return (
    <Animated.View style={[{ transform: [{ scale: btnSpringAnim.scale }] }]}>
      <RNPIconButton
        color={Colors.white}
        rippleColor={color ? color : 'black'}
        size={size ? size : 34}
        style={buttonStyle}
        icon={iconName}
        onPress={handlePress}
      />
    </Animated.View>
  );
};
