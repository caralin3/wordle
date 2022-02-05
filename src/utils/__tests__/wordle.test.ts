import { wordle } from '../wordle';

describe('Wordle', () => {
  describe('4 - letter words', () => {
    const answer = 'rust';
    it('should return all letters with "success" status', () => {
      const guess = 'rust';
      const results = wordle(guess, answer);
      expect(results.length).toBe(4);
      expect(results[0]).toEqual({
        letter: 'r',
        status: 'success',
      });
      expect(results[1]).toEqual({
        letter: 'u',
        status: 'success',
      });
      expect(results[2]).toEqual({
        letter: 's',
        status: 'success',
      });
      expect(results[3]).toEqual({
        letter: 't',
        status: 'success',
      });
    });
    it('should return letters in the word and in the correct spot with "success" status', () => {
      const guess = 'luck';
      const results = wordle(guess, answer);
      expect(results.length).toBe(4);
      expect(results[0]).toEqual({
        letter: 'l',
        status: 'failure',
      });
      expect(results[1]).toEqual({
        letter: 'u',
        status: 'success',
      });
      expect(results[2]).toEqual({
        letter: 'c',
        status: 'failure',
      });
      expect(results[3]).toEqual({
        letter: 'k',
        status: 'failure',
      });
    });
    it('should return letters in the word but in the wrong spot with "wrong" status', () => {
      const guess = 'stay';
      const results = wordle(guess, answer);
      expect(results.length).toBe(4);
      expect(results[0]).toEqual({
        letter: 's',
        status: 'wrong',
      });
      expect(results[1]).toEqual({
        letter: 't',
        status: 'wrong',
      });
      expect(results[2]).toEqual({
        letter: 'a',
        status: 'failure',
      });
      expect(results[3]).toEqual({
        letter: 'y',
        status: 'failure',
      });
    });
    it('should return letters not in the word, in any spot with "failure" status', () => {
      const guess = 'wire';
      const results = wordle(guess, answer);
      expect(results.length).toBe(4);
      expect(results[0]).toEqual({
        letter: 'w',
        status: 'failure',
      });
      expect(results[1]).toEqual({
        letter: 'i',
        status: 'failure',
      });
      expect(results[2]).toEqual({
        letter: 'r',
        status: 'wrong',
      });
      expect(results[3]).toEqual({
        letter: 'e',
        status: 'failure',
      });
    });
    it('should return correct statuses if duplicate letters are in the word', () => {
      const answerWithDuplicates = 'stat';
      const guess = 'test';
      const results = wordle(guess, answerWithDuplicates);
      expect(results.length).toBe(4);
      expect(results[0]).toEqual({
        letter: 't',
        status: 'wrong',
      });
      expect(results[1]).toEqual({
        letter: 'e',
        status: 'failure',
      });
      expect(results[2]).toEqual({
        letter: 's',
        status: 'wrong',
      });
      expect(results[3]).toEqual({
        letter: 't',
        status: 'success',
      });
    });
    it('should return correct statuses if duplicate letters guessed, but only one is in the word', () => {
      const guess = 'sits';
      const results = wordle(guess, answer);
      expect(results.length).toBe(4);
      expect(results[0]).toEqual({
        letter: 's',
        status: 'wrong',
      });
      expect(results[1]).toEqual({
        letter: 'i',
        status: 'failure',
      });
      expect(results[2]).toEqual({
        letter: 't',
        status: 'wrong',
      });
      expect(results[3]).toEqual({
        letter: 's',
        status: 'failure',
      });
    });
    it('should return correct statuses if duplicate letters guessed, but are not in the word', () => {
      const guess = 'stat';
      const results = wordle(guess, answer);
      expect(results.length).toBe(4);
      expect(results[0]).toEqual({
        letter: 's',
        status: 'wrong',
      });
      expect(results[1]).toEqual({
        letter: 't',
        status: 'failure',
      });
      expect(results[2]).toEqual({
        letter: 'a',
        status: 'failure',
      });
      expect(results[3]).toEqual({
        letter: 't',
        status: 'success',
      });
    });
  });
  describe('5 - letter words', () => {
    const answer = 'rusty';
    it('should return all letters with "success" status', () => {
      const guess = 'rusty';
      const results = wordle(guess, answer);
      expect(results.length).toBe(5);
      expect(results[0]).toEqual({
        letter: 'r',
        status: 'success',
      });
      expect(results[1]).toEqual({
        letter: 'u',
        status: 'success',
      });
      expect(results[2]).toEqual({
        letter: 's',
        status: 'success',
      });
      expect(results[3]).toEqual({
        letter: 't',
        status: 'success',
      });
      expect(results[4]).toEqual({
        letter: 'y',
        status: 'success',
      });
    });
    it('should return letters in the word and in the correct spot with "success" status', () => {
      const guess = 'lucky';
      const results = wordle(guess, answer);
      expect(results.length).toBe(5);
      expect(results[0]).toEqual({
        letter: 'l',
        status: 'failure',
      });
      expect(results[1]).toEqual({
        letter: 'u',
        status: 'success',
      });
      expect(results[2]).toEqual({
        letter: 'c',
        status: 'failure',
      });
      expect(results[3]).toEqual({
        letter: 'k',
        status: 'failure',
      });
      expect(results[4]).toEqual({
        letter: 'y',
        status: 'success',
      });
    });
    it('should return letters in the word but in the wrong spot with "wrong" status', () => {
      const guess = 'stair';
      const results = wordle(guess, answer);
      expect(results.length).toBe(5);
      expect(results[0]).toEqual({
        letter: 's',
        status: 'wrong',
      });
      expect(results[1]).toEqual({
        letter: 't',
        status: 'wrong',
      });
      expect(results[2]).toEqual({
        letter: 'a',
        status: 'failure',
      });
      expect(results[3]).toEqual({
        letter: 'i',
        status: 'failure',
      });
      expect(results[4]).toEqual({
        letter: 'r',
        status: 'wrong',
      });
    });
    it('should return letters not in the word, in any spot with "failure" status', () => {
      const guess = 'tease';
      const results = wordle(guess, answer);
      expect(results.length).toBe(5);
      expect(results[0]).toEqual({
        letter: 't',
        status: 'wrong',
      });
      expect(results[1]).toEqual({
        letter: 'e',
        status: 'failure',
      });
      expect(results[2]).toEqual({
        letter: 'a',
        status: 'failure',
      });
      expect(results[3]).toEqual({
        letter: 's',
        status: 'wrong',
      });
      expect(results[4]).toEqual({
        letter: 'e',
        status: 'failure',
      });
    });
    it('should return correct statuses if duplicate letters are in the word', () => {
      const answerWithDuplicates = 'leave';
      const guess = 'seers';
      const results = wordle(guess, answerWithDuplicates);
      expect(results.length).toBe(5);
      expect(results[0]).toEqual({
        letter: 's',
        status: 'failure',
      });
      expect(results[1]).toEqual({
        letter: 'e',
        status: 'success',
      });
      expect(results[2]).toEqual({
        letter: 'e',
        status: 'wrong',
      });
      expect(results[3]).toEqual({
        letter: 'r',
        status: 'failure',
      });
      expect(results[4]).toEqual({
        letter: 's',
        status: 'failure',
      });
    });
    it('should return correct statuses if duplicate letters guessed, but only one is in the word', () => {
      const guess = 'strut';
      const results = wordle(guess, answer);
      expect(results.length).toBe(5);
      expect(results[0]).toEqual({
        letter: 's',
        status: 'wrong',
      });
      expect(results[1]).toEqual({
        letter: 't',
        status: 'wrong',
      });
      expect(results[2]).toEqual({
        letter: 'r',
        status: 'wrong',
      });
      expect(results[3]).toEqual({
        letter: 'u',
        status: 'wrong',
      });
      expect(results[4]).toEqual({
        letter: 't',
        status: 'failure',
      });
    });
    it('should return correct statuses if duplicate letters guessed, but are not in the word', () => {
      const guess = 'tests';
      const results = wordle(guess, answer);
      expect(results.length).toBe(5);
      expect(results[0]).toEqual({
        letter: 't',
        status: 'failure',
      });
      expect(results[1]).toEqual({
        letter: 'e',
        status: 'failure',
      });
      expect(results[2]).toEqual({
        letter: 's',
        status: 'success',
      });
      expect(results[3]).toEqual({
        letter: 't',
        status: 'success',
      });
      expect(results[4]).toEqual({
        letter: 's',
        status: 'failure',
      });
    });
  });
  describe('6 - letter words', () => {
    const answer = 'posted';
    it('should return all letters with "success" status', () => {
      const guess = 'posted';
      const results = wordle(guess, answer);
      expect(results.length).toBe(6);
      expect(results[0]).toEqual({
        letter: 'p',
        status: 'success',
      });
      expect(results[1]).toEqual({
        letter: 'o',
        status: 'success',
      });
      expect(results[2]).toEqual({
        letter: 's',
        status: 'success',
      });
      expect(results[3]).toEqual({
        letter: 't',
        status: 'success',
      });
      expect(results[4]).toEqual({
        letter: 'e',
        status: 'success',
      });
      expect(results[5]).toEqual({
        letter: 'd',
        status: 'success',
      });
    });
    it('should return letters in the word and in the correct spot with "success" status', () => {
      const guess = 'pasted';
      const results = wordle(guess, answer);
      expect(results.length).toBe(6);
      expect(results[0]).toEqual({
        letter: 'p',
        status: 'success',
      });
      expect(results[1]).toEqual({
        letter: 'a',
        status: 'failure',
      });
      expect(results[2]).toEqual({
        letter: 's',
        status: 'success',
      });
      expect(results[3]).toEqual({
        letter: 't',
        status: 'success',
      });
      expect(results[4]).toEqual({
        letter: 'e',
        status: 'success',
      });
      expect(results[5]).toEqual({
        letter: 'd',
        status: 'success',
      });
    });
    it('should return letters in the word but in the wrong spot with "wrong" status', () => {
      const guess = 'deport';
      const results = wordle(guess, answer);
      expect(results.length).toBe(6);
      expect(results[0]).toEqual({
        letter: 'd',
        status: 'wrong',
      });
      expect(results[1]).toEqual({
        letter: 'e',
        status: 'wrong',
      });
      expect(results[2]).toEqual({
        letter: 'p',
        status: 'wrong',
      });
      expect(results[3]).toEqual({
        letter: 'o',
        status: 'wrong',
      });
      expect(results[4]).toEqual({
        letter: 'r',
        status: 'failure',
      });
      expect(results[5]).toEqual({
        letter: 't',
        status: 'wrong',
      });
    });
    it('should return letters not in the word, in any spot with "failure" status', () => {
      const guess = 'guilts';
      const results = wordle(guess, answer);
      expect(results.length).toBe(6);
      expect(results[0]).toEqual({
        letter: 'g',
        status: 'failure',
      });
      expect(results[1]).toEqual({
        letter: 'u',
        status: 'failure',
      });
      expect(results[2]).toEqual({
        letter: 'i',
        status: 'failure',
      });
      expect(results[3]).toEqual({
        letter: 'l',
        status: 'failure',
      });
      expect(results[4]).toEqual({
        letter: 't',
        status: 'wrong',
      });
      expect(results[5]).toEqual({
        letter: 's',
        status: 'wrong',
      });
    });
    it('should return correct statuses if duplicate letters are in the word', () => {
      const answerWithDuplicates = 'leaves';
      const guess = 'bested';
      const results = wordle(guess, answerWithDuplicates);
      expect(results.length).toBe(6);
      expect(results[0]).toEqual({
        letter: 'b',
        status: 'failure',
      });
      expect(results[1]).toEqual({
        letter: 'e',
        status: 'success',
      });
      expect(results[2]).toEqual({
        letter: 's',
        status: 'wrong',
      });
      expect(results[3]).toEqual({
        letter: 't',
        status: 'failure',
      });
      expect(results[4]).toEqual({
        letter: 'e',
        status: 'success',
      });
      expect(results[5]).toEqual({
        letter: 'd',
        status: 'failure',
      });
    });
    it('should return correct statuses if duplicate letters guessed, but only one is in the word', () => {
      const guess = 'possum';
      const results = wordle(guess, answer);
      expect(results.length).toBe(6);
      expect(results[0]).toEqual({
        letter: 'p',
        status: 'success',
      });
      expect(results[1]).toEqual({
        letter: 'o',
        status: 'success',
      });
      expect(results[2]).toEqual({
        letter: 's',
        status: 'success',
      });
      expect(results[3]).toEqual({
        letter: 's',
        status: 'failure',
      });
      expect(results[4]).toEqual({
        letter: 'u',
        status: 'failure',
      });
      expect(results[5]).toEqual({
        letter: 'm',
        status: 'failure',
      });
    });
    it('should return correct statuses if duplicate letters guessed, but are not in the word', () => {
      const guess = 'teaser';
      const results = wordle(guess, answer);
      expect(results.length).toBe(6);
      expect(results[0]).toEqual({
        letter: 't',
        status: 'wrong',
      });
      expect(results[1]).toEqual({
        letter: 'e',
        status: 'failure',
      });
      expect(results[2]).toEqual({
        letter: 'a',
        status: 'failure',
      });
      expect(results[3]).toEqual({
        letter: 's',
        status: 'wrong',
      });
      expect(results[4]).toEqual({
        letter: 'e',
        status: 'success',
      });
      expect(results[5]).toEqual({
        letter: 'r',
        status: 'failure',
      });
    });
  });
  describe('7 - letter words', () => {
    const answer = 'picture';
    it('should return all letters with "success" status', () => {
      const guess = 'picture';
      const results = wordle(guess, answer);
      expect(results.length).toBe(7);
      expect(results[0]).toEqual({
        letter: 'p',
        status: 'success',
      });
      expect(results[1]).toEqual({
        letter: 'i',
        status: 'success',
      });
      expect(results[2]).toEqual({
        letter: 'c',
        status: 'success',
      });
      expect(results[3]).toEqual({
        letter: 't',
        status: 'success',
      });
      expect(results[4]).toEqual({
        letter: 'u',
        status: 'success',
      });
      expect(results[5]).toEqual({
        letter: 'r',
        status: 'success',
      });
      expect(results[6]).toEqual({
        letter: 'e',
        status: 'success',
      });
    });
    it('should return letters in the word and in the correct spot with "success" status', () => {
      const guess = 'lecture';
      const results = wordle(guess, answer);
      expect(results.length).toBe(7);
      expect(results[0]).toEqual({
        letter: 'l',
        status: 'failure',
      });
      expect(results[1]).toEqual({
        letter: 'e',
        status: 'failure',
      });
      expect(results[2]).toEqual({
        letter: 'c',
        status: 'success',
      });
      expect(results[3]).toEqual({
        letter: 't',
        status: 'success',
      });
      expect(results[4]).toEqual({
        letter: 'u',
        status: 'success',
      });
      expect(results[5]).toEqual({
        letter: 'r',
        status: 'success',
      });
      expect(results[6]).toEqual({
        letter: 'e',
        status: 'success',
      });
    });
    it('should return letters in the word but in the wrong spot with "wrong" status', () => {
      const guess = 'returns';
      const results = wordle(guess, answer);
      expect(results.length).toBe(7);
      expect(results[0]).toEqual({
        letter: 'r',
        status: 'wrong',
      });
      expect(results[1]).toEqual({
        letter: 'e',
        status: 'wrong',
      });
      expect(results[2]).toEqual({
        letter: 't',
        status: 'wrong',
      });
      expect(results[3]).toEqual({
        letter: 'u',
        status: 'wrong',
      });
      expect(results[4]).toEqual({
        letter: 'r',
        status: 'failure',
      });
      expect(results[5]).toEqual({
        letter: 'n',
        status: 'failure',
      });
      expect(results[6]).toEqual({
        letter: 's',
        status: 'failure',
      });
    });
    it('should return letters not in the word, in any spot with "failure" status', () => {
      const guess = 'monster';
      const results = wordle(guess, answer);
      expect(results.length).toBe(7);
      expect(results[0]).toEqual({
        letter: 'm',
        status: 'failure',
      });
      expect(results[1]).toEqual({
        letter: 'o',
        status: 'failure',
      });
      expect(results[2]).toEqual({
        letter: 'n',
        status: 'failure',
      });
      expect(results[3]).toEqual({
        letter: 's',
        status: 'failure',
      });
      expect(results[4]).toEqual({
        letter: 't',
        status: 'wrong',
      });
      expect(results[5]).toEqual({
        letter: 'e',
        status: 'wrong',
      });
      expect(results[6]).toEqual({
        letter: 'r',
        status: 'wrong',
      });
    });
    it('should return correct statuses if duplicate letters are in the word', () => {
      const answerWithDuplicates = 'protect';
      const guess = 'thought';
      const results = wordle(guess, answerWithDuplicates);
      expect(results.length).toBe(7);
      expect(results[0]).toEqual({
        letter: 't',
        status: 'wrong',
      });
      expect(results[1]).toEqual({
        letter: 'h',
        status: 'failure',
      });
      expect(results[2]).toEqual({
        letter: 'o',
        status: 'success',
      });
      expect(results[3]).toEqual({
        letter: 'u',
        status: 'failure',
      });
      expect(results[4]).toEqual({
        letter: 'g',
        status: 'failure',
      });
      expect(results[5]).toEqual({
        letter: 'h',
        status: 'failure',
      });
      expect(results[6]).toEqual({
        letter: 't',
        status: 'success',
      });
    });
    it('should return correct statuses if duplicate letters guessed, but only one is in the word', () => {
      const guess = 'futures';
      const results = wordle(guess, answer);
      expect(results.length).toBe(7);
      expect(results[0]).toEqual({
        letter: 'f',
        status: 'failure',
      });
      expect(results[1]).toEqual({
        letter: 'u',
        status: 'wrong',
      });
      expect(results[2]).toEqual({
        letter: 't',
        status: 'wrong',
      });
      expect(results[3]).toEqual({
        letter: 'u',
        status: 'failure',
      });
      expect(results[4]).toEqual({
        letter: 'r',
        status: 'wrong',
      });
      expect(results[5]).toEqual({
        letter: 'e',
        status: 'wrong',
      });
      expect(results[6]).toEqual({
        letter: 's',
        status: 'failure',
      });
    });
    it('should return correct statuses if duplicate letters guessed, but are not in the word', () => {
      const guess = 'dentist';
      const results = wordle(guess, answer);
      expect(results.length).toBe(7);
      expect(results[0]).toEqual({
        letter: 'd',
        status: 'failure',
      });
      expect(results[1]).toEqual({
        letter: 'e',
        status: 'wrong',
      });
      expect(results[2]).toEqual({
        letter: 'n',
        status: 'failure',
      });
      expect(results[3]).toEqual({
        letter: 't',
        status: 'success',
      });
      expect(results[4]).toEqual({
        letter: 'i',
        status: 'wrong',
      });
      expect(results[5]).toEqual({
        letter: 's',
        status: 'failure',
      });
      expect(results[6]).toEqual({
        letter: 't',
        status: 'failure',
      });
    });
  });
});
