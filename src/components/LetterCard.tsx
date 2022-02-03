import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { ColorStatusTheme } from '../appearance';
import { LetterStatus } from '../types';

export interface LetterCardProps {
  letter: string;
  status?: LetterStatus;
}

export const LetterCard: React.FC<LetterCardProps> = ({ letter, status }) => {
  return (
    <Card style={[styles.container, ColorStatusTheme[status]]} elevation={3}>
      <Card.Content>
        {letter === '' ? (
          <Text style={[styles.text, { fontSize: 20, opacity: 0 }]}>X</Text>
        ) : (
          <Text style={[styles.text, { fontSize: 22, color: ColorStatusTheme[status].color }]}>
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
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingHorizontal: 5,
    width: '100%',
  },
  text: {
    alignItems: 'center',
    fontWeight: 'bold',
    lineHeight: 24,
    textAlign: 'center',
  },
});
