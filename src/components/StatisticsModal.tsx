import getColor from 'color';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch, TouchableRipple, useTheme } from 'react-native-paper';
import { customColors, GutterSizes } from '../appearance';
import { Row } from './Grid';
import { Modal } from './Modal';
import { Text } from './Text';

export interface StatisticsModalProps {
  onDismiss: () => void;
  visible: boolean;
}

export const StatisticsModal: React.FC<StatisticsModalProps> = ({ onDismiss, visible }) => {
  const { colors } = useTheme();

  return (
    <Modal title='Statistics' visible={visible} onDismiss={onDismiss}>
      <View style={{ flex: 1 }}>
        <Row>
          <Text bold>Letters in Word</Text>
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
