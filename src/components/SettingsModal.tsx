import getColor from 'color';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch, TouchableRipple, useTheme } from 'react-native-paper';
import { customColors, GutterSizes } from '../appearance';
import { Row } from './Grid';
import { Modal } from './Modal';
import { Text } from './Text';
import { ToggleGroup, ToggleItem } from './ToggleGroup';

export interface SettingsModalProps {
  darkMode: boolean;
  onDismiss: () => void;
  onSetDarkMode: (value: boolean) => void;
  onSetWordLength: (value: string) => void;
  openSettings: () => void;
  openStatistics: () => void;
  wordLength: string;
  visible: boolean;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  darkMode,
  onDismiss,
  onSetDarkMode,
  onSetWordLength,
  openSettings,
  openStatistics,
  visible,
  wordLength,
}) => {
  const { colors } = useTheme();
  const wordLengths: ToggleItem[] = [
    {
      icon: 'numeric-4',
      value: '4',
    },
    {
      icon: 'numeric-5',
      value: '5',
    },
    {
      icon: 'numeric-6',
      value: '6',
    },
    {
      icon: 'numeric-7',
      value: '7',
    },
  ];

  return (
    <Modal title='Settings' visible={visible} onDismiss={onDismiss}>
      <View style={{ flex: 1 }}>
        <Row>
          <Text bold>Letters in Word</Text>
        </Row>
        <Row guttersVertical='md'>
          <ToggleGroup toggleBtns={wordLengths} onValueChange={onSetWordLength} value={wordLength} />
        </Row>
        <Row style={styles.row} align='center' justify='flex-start'>
          <Text bold style={{ flex: 1 }}>
            Dark Mode
          </Text>
          <Switch color={colors.notification} value={darkMode} onValueChange={onSetDarkMode} />
        </Row>
        <Row style={styles.row}>
          <TouchableRipple
            onPress={() => {
              onDismiss();
              openSettings();
            }}
            rippleColor={getColor(colors.notification).alpha(0.3).toString()}
            style={styles.help}
          >
            <Text bold>How to Play</Text>
          </TouchableRipple>
        </Row>
        <Row style={styles.row}>
          <TouchableRipple
            onPress={() => {
              onDismiss();
              openStatistics();
            }}
            rippleColor={getColor(colors.notification).alpha(0.3).toString()}
            style={styles.help}
          >
            <Text bold>Statistics</Text>
          </TouchableRipple>
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
  help: {
    paddingVertical: GutterSizes.sm,
    width: '100%',
  },
});
