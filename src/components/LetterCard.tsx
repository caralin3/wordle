import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, useTheme } from 'react-native-paper';
import { LetterStatus } from '../types';

export interface LetterCardProps {
  letter: string;
  status?: LetterStatus;
}

export const LetterCard: React.FC<LetterCardProps> = ({ letter, status }) => {
  const { colors } = useTheme();
  const colorTheme = {
    backgroundColor: colors.placeholder,
    color: colors.text,
    opacity: 0.3,
  };

  if (status === 'gray') {
    colorTheme.backgroundColor = colors.disabled;
    colorTheme.color = colors.error;
    colorTheme.opacity = 1;
  } else if (status === 'green') {
    colorTheme.backgroundColor = colors.primary;
    colorTheme.color = colors.background;
    colorTheme.opacity = 1;
  } else if (status === 'yellow') {
    colorTheme.backgroundColor = colors.accent;
    colorTheme.color = colors.background;
    colorTheme.opacity = 1;
  }

  return (
    <Card style={[styles.container, colorTheme]} elevation={3}>
      <Card.Content>
        {letter === '' ? (
          <Title style={{ opacity: 0 }}>X</Title>
        ) : (
          <Title style={{ color: colorTheme.color }}>{letter.toUpperCase()}</Title>
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
    paddingHorizontal: 10,
    width: '100%',
  },
});
