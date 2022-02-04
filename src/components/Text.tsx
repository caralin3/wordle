import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';
import { defaultTheme, GutterSizes, TextSizes } from '../appearance';

export interface TextProps {
  align?: TextStyle['textAlign'];
  bold?: boolean;
  gutters?: {
    bottom?: keyof typeof GutterSizes;
    left?: keyof typeof GutterSizes;
    right?: keyof typeof GutterSizes;
    top?: keyof typeof GutterSizes;
  };
  italic?: boolean;
  size?: keyof typeof TextSizes;
  style?: TextStyle;
  textColor?: keyof typeof defaultTheme.colors;
}

export const Text: React.FC<TextProps> = ({ align, bold, children, textColor, gutters, italic, size, style }) => {
  function getTextColor() {
    if (textColor) {
      const color = defaultTheme.colors[textColor] as any;
      const isColorObject = typeof defaultTheme.colors[textColor] === 'object';
      if (isColorObject) {
        if (!!color && !!color.background) {
          return color.background;
        }
      }
      return color;
    }
    if (!!style && !!style.color) {
      return style.color;
    }
    return undefined;
  }

  return (
    <RNText
      style={{
        ...style,
        color: getTextColor(),
        textAlign: align ? align : undefined,
        fontSize: size ? TextSizes[size] : TextSizes.md,
        fontStyle: italic ? 'italic' : undefined,
        fontWeight: bold ? 'bold' : undefined,
        paddingBottom: !!gutters && !!gutters.bottom ? GutterSizes[gutters.bottom] : undefined,
        paddingLeft: !!gutters && !!gutters.left ? GutterSizes[gutters.left] : undefined,
        paddingRight: !!gutters && !!gutters.right ? GutterSizes[gutters.right] : undefined,
        paddingTop: !!gutters && !!gutters.top ? GutterSizes[gutters.top] : undefined,
      }}
    >
      {children}
    </RNText>
  );
};
