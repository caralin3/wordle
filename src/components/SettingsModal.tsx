import getColor from 'color';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch, TouchableRipple, useTheme } from 'react-native-paper';
import { GutterSizes } from '../appearance';
import { PreferencesContext } from '../context';
import { Row } from './Grid';
import { Modal } from './Modal';
import { Text } from './Text';
import { ToggleGroup, ToggleItem } from './ToggleGroup';

export interface SettingsModalProps {
  onDismiss: () => void;
  onSetWordLength: (value: string) => void;
  openSettings: () => void;
  openStatistics: () => void;
  wordLength: string;
  visible: boolean;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  onDismiss,
  onSetWordLength,
  openSettings,
  openStatistics,
  visible,
  wordLength,
}) => {
  const { toggleTheme, darkMode } = React.useContext(PreferencesContext);
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
          <Text bold textColor='label'>
            Letters in Word
          </Text>
        </Row>
        <Row guttersVertical='md'>
          <ToggleGroup toggleBtns={wordLengths} onValueChange={onSetWordLength} value={wordLength} />
        </Row>
        <Row
          style={StyleSheet.flatten([styles.row, { borderColor: colors.border }])}
          align='center'
          justify='flex-start'
        >
          <Text bold textColor='label' style={{ flex: 1 }}>
            Dark Mode
          </Text>
          <Switch color={colors.primary} value={darkMode} onValueChange={toggleTheme} />
        </Row>
        <Row style={StyleSheet.flatten([styles.row, { borderColor: colors.border }])}>
          <TouchableRipple
            onPress={() => {
              onDismiss();
              openSettings();
            }}
            rippleColor={getColor(colors.primary).alpha(0.3).toString()}
            style={styles.help}
          >
            <Text bold textColor='label'>
              How to Play
            </Text>
          </TouchableRipple>
        </Row>
        <Row style={StyleSheet.flatten([styles.row, { borderColor: colors.border }])}>
          <TouchableRipple
            onPress={() => {
              onDismiss();
              openStatistics();
            }}
            rippleColor={getColor(colors.primary).alpha(0.3).toString()}
            style={styles.help}
          >
            <Text bold textColor='label'>
              Statistics
            </Text>
          </TouchableRipple>
        </Row>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  row: {
    borderTopWidth: 1,
    marginTop: GutterSizes.md,
    paddingTop: GutterSizes.md,
  },
  help: {
    paddingVertical: GutterSizes.sm,
    width: '100%',
  },
});
