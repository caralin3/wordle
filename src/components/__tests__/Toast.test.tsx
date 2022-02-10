import React from 'react';
import renderer from 'react-test-renderer';
import { ToastProps } from '..';
import { Toast } from '../Toast';
import { MockTheme } from '../__mocks__/MockTheme';

describe('Toast', () => {
  test('renders success style correctly', () => {
    const props: ToastProps = {
      onDismiss: () => jest.fn(),
      message: 'Toast Message',
      visible: true,
    };
    const tree = renderer
      .create(
        <MockTheme>
          <Toast {...props} />
        </MockTheme>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('renders error style correctly', () => {
    const props: ToastProps = {
      onDismiss: () => jest.fn(),
      message: 'Toast Message',
      type: 'error',
      visible: true,
    };
    const tree = renderer
      .create(
        <MockTheme>
          <Toast {...props} />
        </MockTheme>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
