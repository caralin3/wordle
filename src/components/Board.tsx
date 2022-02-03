import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Col, LetterCard, Row } from './';

export interface BoardRowProps {
  size?: number;
  word?: string;
}

export const BoardRow: React.FC<BoardRowProps> = ({ size = 5, word }) => {
  if (!word) {
    const cols = [];
    for (let i = 0; i < size; i++) {
      cols.push(i);
    }
    return (
      <Row>
        {cols.map((col, index) => (
          <Col gutters='sm' key={index}>
            <LetterCard letter='' />
          </Col>
        ))}
      </Row>
    );
  }
  const letters = [];
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }
  return (
    <Row>
      {letters.map((letter, index) => (
        <Col gutters='sm' key={index}>
          <LetterCard letter={letter} />
        </Col>
      ))}
    </Row>
  );
};

export interface BoardProps {
  maxAttempts?: number;
  size?: number;
  words?: string[];
}

export const Board: React.FC<BoardProps> = ({ maxAttempts = 6, size, words }) => {
  if (!!words && words.length > 0) {
    const rows = [];
    for (let i = 0; i < maxAttempts - words.length; i++) {
      rows.push(i);
    }
    return (
      <View style={styles.container}>
        {words.map((word, index) => (
          <BoardRow size={size} word={word} key={index} />
        ))}
        {rows.length > 0 && rows.map((row, index) => <BoardRow size={size} key={index} />)}
      </View>
    );
  }
  const rows = [];
  for (let i = 0; i < maxAttempts; i++) {
    rows.push(i);
  }
  return (
    <View style={styles.container}>
      {rows.map((row, index) => (
        <BoardRow size={size} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});
