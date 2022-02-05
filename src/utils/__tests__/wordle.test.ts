import { wordle } from '../wordle';

describe('Wordle', () => {
  const answer = 'rusty';
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
