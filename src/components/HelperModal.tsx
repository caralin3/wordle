import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { customColors, GutterSizes } from '../appearance';
import { Modal } from './Modal';
import { Text } from './Text';

export interface HelperModalProps {
  onDismiss: () => void;
  visible: boolean;
}

export const HelperModal: React.FC<HelperModalProps> = ({ onDismiss, visible }) => {
  const example1Src = require('../appearance/images/correct-example.png');
  const example2Src = require('../appearance/images/wrong-example.png');
  const example3Src = require('../appearance/images/failure-example.png');

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
          <Image source={example1Src} resizeMethod='resize' style={styles.image} />
          <Text bold size='sm'>
            <Text bold textColor='notification'>
              "P"
            </Text>{' '}
            is in the word and in the correct spot.
          </Text>
          <View style={styles.section}>
            <Image source={example2Src} resizeMethod='resize' style={styles.image} />
            <Text bold size='sm'>
              <Text bold textColor='notification'>
                "S"
              </Text>{' '}
              is in the word but in the wrong spot.
            </Text>
          </View>
          <View style={styles.section}>
            <Image source={example3Src} resizeMethod='resize' style={styles.image} />
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
  image: {
    height: 60,
    width: 250,
  },
});
