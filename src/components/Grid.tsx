import * as React from 'react';
import { FlexAlignType, StyleSheet, View, ViewStyle } from 'react-native';

const Sizes = {
  xxs: 1,
  xs: 3,
  sm: 5,
  md: 10,
  lg: 20,
};

export interface RowProps {
  align?: FlexAlignType;
  flex?: number;
  guttersHorizontal?: keyof typeof Sizes;
  guttersVertical?: keyof typeof Sizes;
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
          paddingHorizontal: !!guttersHorizontal ? Sizes[guttersHorizontal] : Sizes.lg,
          paddingVertical: !!guttersVertical ? Sizes[guttersVertical] : undefined,
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
  gutters?: keyof typeof Sizes;
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
        padding: !!gutters ? Sizes[gutters] : undefined,
      }}
    >
      {children}
    </View>
  );
};
