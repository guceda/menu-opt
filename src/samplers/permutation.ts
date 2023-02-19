import { MenuType } from '../declarations/dataStructures';
import { ISamplersParams } from './declarations';

export type IPermutationParam = Record<string, never>;

/**
 * Generates all permutations of an array.
 * @param candidate - The array to generate permutations for.
 * @param params - An empty object, as this sampler does not use any parameters.
 * @returns An iterable iterator that generates each permutation of the input array.
 */
function* permutation({
  candidate,
  params: {},
}: ISamplersParams<IPermutationParam>): IterableIterator<MenuType> {
  if (candidate.length === 0) {
    yield [];
    return;
  }

  for (let i = 0; i < candidate.length; i++) {
    const current = candidate[i];
    const remaining = candidate.slice(0, i).concat(candidate.slice(i + 1));
    const permutations = permutation({
      candidate: remaining,
      params: {},
    });

    for (const perm of permutations) {
      yield [current, ...perm];
    }
  }
}

export { permutation };
