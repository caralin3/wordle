import * as React from 'react';
import { FlexAlignType, StyleSheet, View, ViewStyle } from 'react-native';
import { GutterSizes } from '../appearance';
export interface RowProps {
  align?: FlexAlignType;
  flex?: number;
  guttersHorizontal?: keyof typeof GutterSizes;
  guttersVertical?: keyof typeof GutterSizes;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  style?: ViewStyle;
}

export const Row: React.FC<RowProps> = ({
  align,
  children,
  guttersHorizontal,
  guttersVertical,
  flex,
  justify,
  style,
}) => {
  return (
    <View
      style={[
        rowStyles.container,
        {
          ...style,
          flex,
          alignItems: align ?? 'center',
          justifyContent: justify ?? 'space-between',
          paddingHorizontal: !!guttersHorizontal ? GutterSizes[guttersHorizontal] : undefined,
          paddingVertical: !!guttersVertical ? GutterSizes[guttersVertical] : undefined,
        },
      ]}
    >
      {children}
    </View>
  );
};

const rowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
});

export interface ColProps {
  align?: FlexAlignType;
  flex?: number;
  gutters?: keyof typeof GutterSizes;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  style?: ViewStyle;
}

export const Col: React.FC<ColProps> = ({ align, children, flex, gutters, justify, style }) => {
  return (
    <View
      style={{
        ...style,
        flex,
        alignItems: align ?? 'center',
        justifyContent: justify ?? 'center',
        padding: !!gutters ? GutterSizes[gutters] : undefined,
      }}
    >
      {children}
    </View>
  );
};
