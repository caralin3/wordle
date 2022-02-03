import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Board, Button, IconButton, Keyboard, Row } from '../components';

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
      <Text style={styles.title}>Wordle</Text>
      <Board />
      <Row style={styles.actions} justify='space-between' guttersHorizontal='lg'>
        <IconButton iconName='cog' />
        <Button title='submit' />
        <IconButton iconName='home' />
      </Row>
      <Keyboard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  actions: {
    width: '100%',
  },
});
