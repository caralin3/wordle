import { WordleKeyboard } from '../types';

export const pick = (obj, ...args) => ({
  ...args.reduce((res, key) => ({ ...res, [key]: obj[key] }), {}),
});

export const alphabet: WordleKeyboard = {
  q: 'available',
  w: 'available',
  e: 'available',
  r: 'available',
  t: 'available',
  y: 'available',
  u: 'available',
  i: 'available',
  o: 'available',
  p: 'available',
  a: 'available',
  s: 'available',
  d: 'available',
  f: 'available',
  g: 'available',
  h: 'available',
  j: 'available',
  k: 'available',
  l: 'available',
  z: 'available',
  x: 'available',
  c: 'available',
  v: 'available',
  b: 'available',
  n: 'available',
  m: 'available',
};
