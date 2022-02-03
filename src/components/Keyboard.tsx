import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Cell, WordleBoard } from '../types';
import { alphabetRow1, alphabetRow2, alphabetRow3 } from '../utils';
import { Col, Row } from './Grid';
import { IconButton } from './IconButton';
import { LetterButton } from './LetterButton';

export interface KeyboardProps {
  disabled: boolean;
  onBackspace: () => void;
  onPress: (letter: string) => void;
}

export const Keyboard: React.FC<KeyboardProps> = ({ disabled, onBackspace, onPress }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Row justify='center'>
        {alphabetRow1.map((letter) => (
          <Col gutters='xxs' key={letter}>
            <LetterButton disabled={disabled} title={letter} onPress={() => onPress(letter)} />
          </Col>
        ))}
      </Row>
      <Row justify='center'>
        {alphabetRow2.map((letter) => (
          <Col gutters='xxs' key={letter}>
            <LetterButton disabled={disabled} title={letter} onPress={() => onPress(letter)} />
          </Col>
        ))}
      </Row>
      <Row justify='center'>
        {alphabetRow3.map((letter) => (
          <Col gutters='xxs' key={letter}>
            <LetterButton disabled={disabled} title={letter} onPress={() => onPress(letter)} />
          </Col>
        ))}
        <Col gutters='xxs'>
          <IconButton
            iconName='backspace-outline'
            color={colors.error}
            size={30}
            height={45}
            width={65}
            onPress={onBackspace}
          />
        </Col>
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    width: '100%',
  },
});
