import React from 'react';
import { StyleSheet } from 'react-native';
import { IconButton as RNPIconButton, Modal as RNPModal, Portal, Title, useTheme } from 'react-native-paper';
import { Col, Row } from './Grid';
import { customColors } from '../appearance';

export interface ModalProps {
  dismissable?: boolean;
  onDismiss: () => void;
  title?: string;
  visible: boolean;
}

export const Modal: React.FC<ModalProps> = ({ children, dismissable, onDismiss, title, visible }) => {
  const { colors, roundness } = useTheme();
  return (
    <Portal>
      <RNPModal
        contentContainerStyle={[styles.containerStyle, { borderRadius: roundness }]}
        dismissable={dismissable}
        onDismiss={onDismiss}
        visible={visible}
        style={styles.modal}
      >
        <Row>
          <Col>
            <RNPIconButton icon='close' color={colors.white} />
          </Col>
          <Col>
            <Title style={styles.title}>{title}</Title>
          </Col>
          <Col>
            <RNPIconButton icon='close' color={colors.gray} onPress={onDismiss} />
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
  containerStyle: {
    backgroundColor: customColors.white,
  },
  title: {
    fontWeight: 'bold',
  },
  content: {
    paddingBottom: 20,
    paddingTop: 10,
  },
});
