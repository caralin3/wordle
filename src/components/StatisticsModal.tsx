import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { customColors, GutterSizes } from '../appearance';
import { GuessStats, Stats } from '../types';
import { BarChart } from './BarChart';
import { Col, Row } from './Grid';
import { Modal } from './Modal';
import { Text } from './Text';

export interface StatisticsModalProps {
  guesses: GuessStats[];
  onDismiss: () => void;
  stats: Stats;
  visible: boolean;
}

export const StatisticsModal: React.FC<StatisticsModalProps> = ({ guesses, onDismiss, stats, visible }) => {
  const { colors } = useTheme();

  const labels = {
    played: 'Played',
    win: 'Win %',
    currentStreak: 'Current\nStreak',
    maxStreak: 'Max\nStreak',
  };

  return (
    <Modal title='Statistics' visible={visible} onDismiss={onDismiss}>
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
