import getColor from 'color';
import React from 'react';
import { Animated } from 'react-native';
import { IconButton as RNPIconButton, useTheme } from 'react-native-paper';
import { createBtnAnim } from '../utils';

export interface IconButtonProps {
  backgroundColor?: string;
  color?: string;
  height?: number;
  iconName: string;
  onPress?: () => void;
  rippleColor?: string;
  size?: number;
  width?: number;
}

export const IconButton: React.FC<IconButtonProps> = ({
  backgroundColor,
  color,
  height,
  iconName,
  onPress,
  rippleColor,
  size,
  width,
}) => {
  const { colors, roundness } = useTheme();
  const buttonAnim = new Animated.Value(0);
  const { onPressIn, onPressOut, scale } = createBtnAnim(buttonAnim);

  const buttonStyle: any = {
    backgroundColor: backgroundColor ? backgroundColor : colors.gray,
    borderRadius: roundness,
    elevation: 3,
  };

  if (!!height) {
    buttonStyle.height = height;
  }

  if (!!width) {
    buttonStyle.width = width;
  }

  return (
    <Animated.View style={[{ transform: [{ scale: scale }] }]}>
      <RNPIconButton
        color={color ? color : colors.white}
        rippleColor={getColor(colors.black).alpha(0.2).toString()}
        size={size ? size : 34}
        style={buttonStyle}
        icon={iconName}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
      />
    </Animated.View>
  );
};
