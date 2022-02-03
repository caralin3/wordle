import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { Board, Button } from '../components';

/**
 * @TODO:
 *
 * Helper modal
 * wire wordle logic
 * letter buttons
 *
 */

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Title>Wordle</Title>
      <Board />
      <Button title='submit' disabled />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
