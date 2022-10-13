import { associations as associationsObj } from './associations';
import { fitts as fittsObj } from './fittsLaw';

describe('objective functions', () => {
  test('fitts', () => {
    const runOne = fittsObj({ frequencies: { a: 3, b: 10, c: 7 } })([
      'a',
      'c',
      'b',
    ]);
    const runTwo = fittsObj({ frequencies: { a: 3, b: 10, c: 7 } })([
      'b',
      'c',
      'a',
    ]);
    expect(runOne).toBeGreaterThan(runTwo);
  });
});
