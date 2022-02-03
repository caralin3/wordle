import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as RNPButton } from 'react-native-paper';

export interface ButtonProps {
  disabled?: boolean;
  onPress?: () => void;
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ disabled = false, onPress, title }) => {
  return (
    <RNPButton
      uppercase
      disabled={disabled}
      labelStyle={{ fontSize: 20 }}
      onPress={onPress}
      mode='contained'
      theme={{ roundness: 15 }}
      style={styles.container}
    >
      {title}
    </RNPButton>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
