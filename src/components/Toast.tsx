import React from 'react';
import { StyleSheet } from 'react-native';
import { Modal as RNPModal, Portal, useTheme } from 'react-native-paper';
import { Text } from './Text';
import { GutterSizes } from '../appearance';

export interface ToastProps {
  onDismiss: () => void;
  message: string;
  type?: 'success' | 'error';
  visible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ onDismiss, message, type = 'success', visible }) => {
  const { colors, roundness } = useTheme();

  let backgroundColor = colors.black;
  if (type === 'error') {
    backgroundColor = colors.red;
  }

  return (
    <Portal
      theme={{
        colors: {
          backdrop: 'transparent',
        },
      }}
    >
      <RNPModal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={[
          styles.containerStyle,
          {
            backgroundColor,
            borderRadius: roundness,
          },
        ]}
        style={styles.modal}
      >
        <Text bold size='xl' textColor='white'>
          {message}
        </Text>
      </RNPModal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
  },
  containerStyle: {
    alignItems: 'center',
    paddingHorizontal: GutterSizes.md,
    paddingVertical: GutterSizes.lg,
    justifyContent: 'center',
    maxWidth: 300,
    width: '50%',
  },
});
