import React from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Row } from './Grid';
import { RootState } from '../store';
import { decrement, increment } from '../store/counter';
import { Button } from './Button';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Row>
        <Button title='Increment' onPress={() => dispatch(increment())} />
        <Text>{count}</Text>
        <Button title='Decrement' onPress={() => dispatch(decrement())} />
      </Row>
    </View>
  );
}
