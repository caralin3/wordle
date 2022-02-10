import React from 'react';
import { StyleSheet } from 'react-native';
import { IconButton as RNPIconButton, Modal as RNPModal, Portal, Title, useTheme } from 'react-native-paper';
import { PreferencesContext } from '../context';
import { Col, Row } from './Grid';

export interface ModalProps {
  dismissable?: boolean;
  onDismiss: () => void;
  title?: string;
  visible: boolean;
}

export const Modal: React.FC<ModalProps> = ({ children, dismissable, onDismiss, title, visible }) => {
  const { colors, roundness } = useTheme();
  const { darkMode } = React.useContext(PreferencesContext);
  return (
    <Portal>
      <RNPModal
        contentContainerStyle={{
          backgroundColor: darkMode ? colors.black : colors.white,
          borderColor: darkMode ? colors.white : undefined,
          borderRadius: roundness,
          borderWidth: darkMode ? 1 : undefined,
        }}
        dismissable={dismissable}
        onDismiss={onDismiss}
        visible={visible}
        style={styles.modal}
      >
        <Row>
          <Col>
            <RNPIconButton icon='close' color={darkMode ? colors.black : colors.white} />
          </Col>
          <Col>
            <Title style={[styles.title, { color: colors.primary }]}>{title}</Title>
          </Col>
          <Col>
            <RNPIconButton icon='close' color={darkMode ? colors.white : colors.gray} onPress={onDismiss} />
          </Col>
        </Row>
        <Row style={styles.content} guttersHorizontal='lg'>
          {children}
        </Row>
      </RNPModal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modal: {
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
  },
  content: {
    paddingBottom: 20,
    paddingTop: 10,
  },
});
