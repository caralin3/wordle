import * as React from 'react';
import { FlexAlignType, StyleSheet, View } from 'react-native';

export interface RowProps {
  align?: FlexAlignType;
  flex?: number;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

export const Row: React.FC<RowProps> = ({ align, children, flex, justify }) => {
  return (
    <View
      style={[
        rowStyles.container,
        {
          flex,
          alignItems: align ?? 'center',
          justifyContent: justify ?? 'space-between',
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
    paddingHorizontal: 5,
  },
});

export interface ColProps {
  align?: FlexAlignType;
  flex?: number;
  gutters?: 'sm' | 'md' | 'lg';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

export const Col: React.FC<ColProps> = ({ align, children, flex, gutters, justify }) => {
  const sizes = {
    sm: 5,
    md: 10,
    lg: 20,
  };
  return (
    <View
      style={{
        flex,
        alignItems: align ?? 'center',
        justifyContent: justify ?? 'center',
        padding: !!gutters ? sizes[gutters] : undefined,
      }}
    >
      {children}
    </View>
  );
};
