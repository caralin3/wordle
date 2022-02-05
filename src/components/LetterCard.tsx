import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { Text } from './Text';
import { getColorStatus, TextSizes } from '../appearance';
import { LetterStatus } from '../types';
import { PreferencesContext } from '../context';

export interface LetterCardProps {
  letter: string;
  size?: keyof typeof TextSizes;
  status?: LetterStatus;
}

export const LetterCard: React.FC<LetterCardProps> = ({ letter, size, status }) => {
  const { darkMode } = React.useContext(PreferencesContext);
  const colorTheme = getColorStatus(darkMode);
  return (
    <Card style={[styles.container, colorTheme[status]]} elevation={3}>
      <Card.Content>
        {letter === '' ? (
          <Text bold size='lg' style={StyleSheet.flatten([styles.text, { opacity: 0 }])}>
            X
          </Text>
        ) : (
          <Text
            bold
            size={size ? size : 'xl'}
            style={StyleSheet.flatten([styles.text, { color: colorTheme[status].color }])}
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
