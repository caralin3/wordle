import getColor from 'color';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch, TouchableRipple, useTheme } from 'react-native-paper';
import { customColors, GutterSizes } from '../appearance';
import { GuessStats, Stats } from '../types';
import { Col, Row } from './Grid';
import { Modal } from './Modal';
import { Text } from './Text';

export interface StatisticsModalProps {
  guesses: GuessStats;
  onDismiss: () => void;
  stats: Stats;
  visible: boolean;
}

export const StatisticsModal: React.FC<StatisticsModalProps> = ({ onDismiss, stats, visible }) => {
  const { colors } = useTheme();

  const labels = {
    played: 'Played',
    win: 'Win %',
    currentStreak: 'Current\nStreak',
    maxStreak: 'Max\nStreak',
  };

  return (
    <Modal title='Statistics' visible={visible} onDismiss={onDismiss}>
      <View style={{ flex: 1 }}>
        <Row align='flex-start'>
          {Object.keys(stats).map((key) => (
            <Col key={key}>
              <Text bold align='center' textColor='success'>
                {stats[key]}
              </Text>
              <Text bold align='center'>
                {labels[key]}
              </Text>
            </Col>
          ))}
        </Row>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  row: {
    borderColor: customColors.border,
    borderTopWidth: 1,
    marginTop: GutterSizes.md,
    paddingTop: GutterSizes.md,
  },
});
