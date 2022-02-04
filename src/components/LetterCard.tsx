import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { Text } from './Text';
import { ColorStatusTheme, TextSizes } from '../appearance';
import { LetterStatus } from '../types';

export interface LetterCardProps {
  letter: string;
  size?: keyof typeof TextSizes;
  status?: LetterStatus;
}

export const LetterCard: React.FC<LetterCardProps> = ({ letter, size, status }) => {
  return (
    <Card style={[styles.container, ColorStatusTheme[status]]} elevation={3}>
      <Card.Content>
        {letter === '' ? (
          <Text bold size='lg' style={StyleSheet.flatten([styles.text, { opacity: 0 }])}>
            X
          </Text>
        ) : (
          <Text
            bold
            size={size ? size : 'xl'}
            style={StyleSheet.flatten([styles.text, { color: ColorStatusTheme[status].color }])}
          >
            {letter.toUpperCase()}
          </Text>
        )}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
  },
  text: {
    lineHeight: TextSizes.xxl,
  },
});
