import { words } from './words';
import { Cell } from '../types';

export const MAX_ATTEMPTS = 6;

export function isValidWord(word: string) {
  return word in words;
}

function createIndexDictionary(word: string, answer: string) {
  let dict: {
    [key: string]: string[];
  } = {};
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const indices = [];
    for (let j = 0; j < answer.length; j++) {
      const answerLetter = answer[j];
      if (answerLetter === letter) {
        indices.push(j.toString());
      }
    }
    if (!dict[letter]) {
      dict[letter] = indices;
    }
  }
  return dict;
}

function setLetterStates(guess, answer) {
  const answerDict = createIndexDictionary(answer, guess);
  const result: Cell[] = [];

  // initial state
  for (let i = 0; i < guess.length; i++) {
    const letter = guess[i];
    if (!!answerDict[letter] && letter === answer[i]) {
      result.push({ letter, status: 'success' });
    } else {
      result.push({ letter, status: 'failure' });
    }
  }

  // @TODO: Fix
  // update wrong spot
  for (let j = 0; j < result.length; j++) {
    const item = result[j];
    if (!!answerDict[item.letter] && item.status !== 'success' && answer[j] !== item.letter) {
      result[j].status = 'wrong';
    }
  }

  return result;
}

export function wordle(guess: string, answer: string) {
  const result = setLetterStates(guess.toLowerCase(), answer.toLowerCase());
  return result;
}
