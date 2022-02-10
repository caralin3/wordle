import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from '../Text';
import { MockTheme } from '../__mocks__/MockTheme';

describe('Text', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <MockTheme>
          <Text>Sample Text</Text>
        </MockTheme>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('renders bold correctly', () => {
    const tree = renderer
      .create(
        <MockTheme>
          <Text bold>Sample Text</Text>
        </MockTheme>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('renders large correctly', () => {
    const tree = renderer
      .create(
        <MockTheme>
          <Text size='lg'>Sample Text</Text>
        </MockTheme>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
