import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { WordleKeyboard } from '../types';
import { pick } from '../utils';
import { Col, Row } from './Grid';
import { IconButton } from './IconButton';
import { LetterButton } from './LetterButton';

export interface KeyboardProps {
  disabled: boolean;
  keyboard: WordleKeyboard;
  onBackspace: () => void;
  onPress: (letter: string) => void;
}

export const Keyboard: React.FC<KeyboardProps> = ({ disabled, keyboard, onBackspace, onPress }) => {
  const { colors } = useTheme();

  const alphabetRow1 = pick(keyboard, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p');
  const alphabetRow2 = pick(keyboard, 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l');
  const alphabetRow3 = pick(keyboard, 'z', 'x', 'c', 'v', 'b', 'n', 'm');

  return (
    <View style={styles.container}>
      <Row justify='center'>
        {Object.keys(alphabetRow1).map((letter) => (
          <Col gutters='xxs' key={letter}>
            <LetterButton
              disabled={disabled}
              title={letter.toUpperCase()}
              status={alphabetRow1[letter]}
              onPress={() => onPress(letter)}
            />
          </Col>
        ))}
      </Row>
      <Row justify='center'>
        {Object.keys(alphabetRow2).map((letter) => (
          <Col gutters='xxs' key={letter}>
            <LetterButton
              disabled={disabled}
              title={letter.toUpperCase()}
              status={alphabetRow2[letter]}
              onPress={() => onPress(letter)}
            />
          </Col>
        ))}
      </Row>
      <Row justify='center'>
        {Object.keys(alphabetRow3).map((letter) => (
          <Col gutters='xxs' key={letter}>
            <LetterButton
              disabled={disabled}
              title={letter.toUpperCase()}
              status={alphabetRow3[letter]}
              onPress={() => onPress(letter)}
            />
          </Col>
        ))}
        <Col gutters='xxs'>
          <IconButton
            iconName='backspace-outline'
            backgroundColor={colors.red}
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
