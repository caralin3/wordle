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

export const Text: React.FC<TextProps> = ({ align, bold, children, textColor, gutters, italic, size, style }) => (
  <RNText
    style={{
      ...style,
      color: textColor
        ? defaultTheme.colors[textColor].toString()
        : !!!!style && !!style.color
        ? style.color
        : undefined,
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
