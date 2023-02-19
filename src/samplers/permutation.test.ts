import { permutation as permutationSampler } from '.';

describe('samplers', () => {
  test('permutation', () => {
    const permsIt = permutationSampler({
      candidate: ['a', 'b', 'c'],
      params: {},
    });
    expect(permsIt.next().value).toStrictEqual(['a', 'b', 'c']);
    expect(permsIt.next().value).toStrictEqual(['a', 'c', 'b']);
    expect(permsIt.next().value).toStrictEqual(['b', 'a', 'c']);
    expect(permsIt.next().value).toStrictEqual(['b', 'c', 'a']);
    expect(permsIt.next().value).toStrictEqual(['c', 'a', 'b']);
    expect(permsIt.next().value).toStrictEqual(['c', 'b', 'a']);
    expect(permsIt.next()).toStrictEqual({ done: true, value: undefined });
  });
});
