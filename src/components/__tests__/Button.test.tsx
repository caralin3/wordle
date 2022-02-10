import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../Button';
import { MockTheme } from '../__mocks__/MockTheme';

describe('Button', () => {
  test('renders correctly', () => {
    const btnLabel = 'Press';
    const mockPressFn = jest.fn();
    const tree = renderer
      .create(
        <MockTheme>
          <Button title={btnLabel} onPress={mockPressFn} />
        </MockTheme>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
