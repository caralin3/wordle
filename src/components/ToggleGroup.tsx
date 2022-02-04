import React from 'react';
import { StyleSheet } from 'react-native';
import { ToggleButton, useTheme } from 'react-native-paper';

export interface ToggleItem {
  icon: string;
  value: string;
}

export interface ToggleGroupProps {
  onValueChange: (value: string) => void;
  toggleBtns: ToggleItem[];
  value: string;
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({ onValueChange, toggleBtns, value }) => {
  const { colors } = useTheme();
  return (
    <ToggleButton.Row style={styles.group} onValueChange={onValueChange} value={value}>
      {toggleBtns.map((toggleBtn) => (
        <ToggleButton
          key={toggleBtn.value}
          color={colors.notification}
          size={40}
          style={styles.button}
          {...toggleBtn}
        />
      ))}
    </ToggleButton.Row>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 50,
  },
  group: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});
