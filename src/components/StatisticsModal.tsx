import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { GutterSizes, TextSizes } from '../appearance';
import { GuessStats, Stats } from '../types';
import { BarChart } from './BarChart';
import { Col, Row } from './Grid';
import { Modal } from './Modal';
import { Text } from './Text';

export interface StatisticsModalProps {
  guesses: GuessStats[];
  onDismiss: () => void;
  onNewGame: () => void;
  stats: Stats;
  visible: boolean;
}

export const StatisticsModal: React.FC<StatisticsModalProps> = ({ guesses, onDismiss, onNewGame, stats, visible }) => {
  const { colors } = useTheme();
  const labels = {
    played: 'Played',
    win: 'Win %',
    currentStreak: 'Current\nStreak',
    maxStreak: 'Max\nStreak',
  };

  return (
    <Modal dismissable={false} title='Statistics' visible={visible} onDismiss={onDismiss}>
      <View style={styles.container}>
        <Row align='flex-start'>
          {Object.keys(stats).map((key) => (
            <Col key={key}>
              <Text bold align='center' textColor='success' size='lg'>
                {stats[key]}
              </Text>
              <Text bold align='center' size='sm'>
                {labels[key]}
              </Text>
            </Col>
          ))}
        </Row>
        {guesses.filter((guess) => guess.value > 0).length > 0 && (
          <View style={styles.chart}>
            <BarChart guesses={guesses} />
          </View>
        )}
        <Button labelStyle={{ fontSize: TextSizes.md }} onPress={onNewGame}>
          New Game
        </Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chart: {
    marginLeft: -35,
    paddingBottom: GutterSizes.md,
  },
});
