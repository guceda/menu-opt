import { random as randomSampler } from './';

const mockedRandom = () => {
  let state = 0;
  return () => state--;
};

describe('samplers', () => {
  test('ramdom', () => {
    expect(
      randomSampler({
        candidate: ['a', 'b', 'c'],
        params: { random: mockedRandom() },
      })
    ).toStrictEqual(['c', 'b', 'a']);
  });
});
