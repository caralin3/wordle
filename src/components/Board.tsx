import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Cell, WordleBoard } from '../types';
import { MAX_ATTEMPTS } from '../utils';
import { Col, Row } from './Grid';
import { LetterCard } from './LetterCard';

export interface BoardRowProps {
  letters?: Cell[];
  size?: number;
}

export const BoardRow: React.FC<BoardRowProps> = ({ letters, size = 5 }) => {
  const cells: Cell[] = [];
  for (let i = 0; i < size; i++) {
    if (!!letters && !!letters[i]) {
      cells.push(letters[i]);
    } else {
      cells.push({
        letter: '',
        status: 'unset',
      });
    }
  }

  const gutters = {
    4: 'md',
    5: 'sm',
    6: 'xs',
    7: 'xxs',
  };

  return (
    <Row guttersHorizontal='lg'>
      {cells.map((cell, index) => (
        <Col flex={1} gutters={gutters[size]} key={index}>
          <LetterCard letter={cell.letter} status={cell.status} size={size === 7 ? 'lg' : undefined} />
        </Col>
      ))}
    </Row>
  );
};

export interface BoardProps {
  board: WordleBoard;
  size?: number;
}

export const Board: React.FC<BoardProps> = ({ board, size }) => {
  const rows = [];
  for (let i = 0; i < MAX_ATTEMPTS - Object.keys(board).length; i++) {
    rows.push(i);
  }

  return (
    <View style={styles.container}>
      {Object.keys(board).map((key) => (
        <BoardRow size={size} letters={board[key]} key={key} />
      ))}
      {rows.length > 0 && rows.map((row, index) => <BoardRow size={size} key={index} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    width: '100%',
  },
});
