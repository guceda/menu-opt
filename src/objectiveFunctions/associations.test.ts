import { associations as associationsObj } from './associations';

describe('objective functions', () => {
  test('associations', () => {
    const runOne = associationsObj({
      associations: { a: { b: 0.5 }, b: { c: 0.5 } },
    })(['a', 'c', 'b']);
    const runTwo = associationsObj({
      associations: { a: { b: 0.5 }, b: { c: 0.5 } },
    })(['a', 'b', 'c']);
    expect(runOne).toBeGreaterThan(runTwo);
  });
});
