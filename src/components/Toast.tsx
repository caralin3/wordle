import React from 'react';
import { Snackbar, useTheme } from 'react-native-paper';

export interface ToastProps {
  onDismiss: () => void;
  message: string;
  type?: 'success' | 'error';
  visible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ onDismiss, message, type = 'error', visible }) => {
  const { colors } = useTheme();
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      action={{
        label: 'X',
        onPress: onDismiss,
        labelStyle: {
          color: colors.white,
        },
        style: {
          backgroundColor: type === 'error' ? colors.error : colors.success.background,
        },
      }}
      style={{ backgroundColor: type === 'error' ? colors.error : colors.success.background }}
    >
      {message}
    </Snackbar>
  );
};
