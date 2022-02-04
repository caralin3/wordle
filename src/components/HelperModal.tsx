import React from 'react';
import { StyleSheet, View } from 'react-native';
import { customColors, GutterSizes } from '../appearance';
import { Cell } from '../types';
import { Col, Row } from './Grid';
import { LetterCard } from './LetterCard';
import { Modal } from './Modal';
import { Text } from './Text';

export interface HelperModalProps {
  onDismiss: () => void;
  visible: boolean;
}

export const HelperModal: React.FC<HelperModalProps> = ({ onDismiss, visible }) => {
  const example1: Cell[] = [
    {
      letter: 'p',
      status: 'success',
    },
    {
      letter: 'l',
      status: 'set',
    },
    {
      letter: 'a',
      status: 'set',
    },
    {
      letter: 'y',
      status: 'set',
    },
    {
      letter: 's',
      status: 'set',
    },
  ];

  const example2: Cell[] = [
    {
      letter: 'w',
      status: 'set',
    },
    {
      letter: 'i',
      status: 'set',
    },
    {
      letter: 's',
      status: 'wrong',
    },
    {
      letter: 'e',
      status: 'set',
    },
    {
      letter: 'r',
      status: 'set',
    },
  ];

  const example3: Cell[] = [
    {
      letter: 'h',
      status: 'set',
    },
    {
      letter: 'i',
      status: 'set',
    },
    {
      letter: 'r',
      status: 'set',
    },
    {
      letter: 'e',
      status: 'set',
    },
    {
      letter: 'd',
      status: 'failure',
    },
  ];

  const renderExample = (example: Cell[]) => (
    <Row style={{ paddingRight: 30 }}>
      {example.map((cell, index) => (
        <Col style={{ minWidth: 58 }} gutters='sm' key={index}>
          <LetterCard letter={cell.letter} status={cell.status} size='sm' />
        </Col>
      ))}
    </Row>
  );

  return (
    <Modal title='How to Play' visible={visible} onDismiss={onDismiss}>
      <View>
        <Text size='sm'>
          Guess the <Text bold>WORDLE</Text> in{' '}
          <Text bold textColor='notification'>
            6
          </Text>{' '}
          tries.
        </Text>
        <Text size='sm' gutters={{ top: 'md' }}>
          Each guess must be a valid 5 letter word.
        </Text>
        <Text size='sm'>Hit the "Submit" button to submit.</Text>
        <Text size='sm' gutters={{ top: 'md' }}>
          After each guess, the color of the tiles will change to show how close your guess was to the word.
        </Text>
        <View style={styles.section}>
          <Text bold size='sm' gutters={{ bottom: 'md' }}>
            Examples:
          </Text>
          {renderExample(example1)}
          <Text bold size='sm'>
            <Text bold textColor='notification'>
              "P"
            </Text>{' '}
            is in the word and in the correct spot.
          </Text>
          <View style={styles.section}>
            {renderExample(example2)}
            <Text bold size='sm'>
              <Text bold textColor='notification'>
                "S"
              </Text>{' '}
              is in the word but in the wrong spot.
            </Text>
          </View>
          <View style={styles.section}>
            {renderExample(example3)}
            <Text bold size='sm'>
              <Text bold textColor='notification'>
                "D"
              </Text>{' '}
              is not in the word, in any spot.
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text bold size='sm' textColor='notification'>
            Come back daily to enjoy a new WORDLE every day!
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  section: {
    borderColor: customColors.border,
    borderTopWidth: 1,
    marginTop: GutterSizes.md,
    paddingTop: GutterSizes.md,
  },
});
