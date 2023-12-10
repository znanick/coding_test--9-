import { minimalDistance } from './index';

describe('minimalDistance', () => {
  test('similar words', () => {
    expect(minimalDistance('wordone', 'wordtwo')).toBe(3);
  });

  test('different words', () => {
    expect(minimalDistance('book', 'slate')).toBe(5);
  });

  test('identical words', () => {
    expect(minimalDistance('test', 'test')).toBe(0);
  });

  test('empty words', () => {
    expect(minimalDistance('', '')).toBe(0);
  });
});
