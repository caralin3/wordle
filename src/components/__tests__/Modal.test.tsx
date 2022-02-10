import React from 'react';
import renderer from 'react-test-renderer';
import { Modal, ModalProps } from '../Modal';
import { Text } from '../Text';
import { MockTheme } from '../__mocks__/MockTheme';

describe('Modal', () => {
  test('renders correctly', () => {
    const props: ModalProps = {
      dismissable: true,
      onDismiss: jest.fn(),
      visible: true,
    };
    const tree = renderer
      .create(
        <MockTheme>
          <Modal {...props}>
            <Text>Test Modal</Text>
          </Modal>
        </MockTheme>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('renders with title correctly', () => {
    const props: ModalProps = {
      dismissable: true,
      onDismiss: jest.fn(),
      title: 'Modal',
      visible: true,
    };
    const tree = renderer
      .create(
        <MockTheme>
          <Modal {...props}>
            <Text>Test Modal</Text>
          </Modal>
        </MockTheme>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
