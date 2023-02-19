import { permutation as permutationSampler } from '../samplers';
import { MenuType } from '../declarations/dataStructures';
import { IOptimizerParams, IOptimizerResult } from './declarations';

/**
 * Exhaustive linear search optimization algorithm.
 * @param seed - The seed menu to start with.
 * @param objectiveFunction - The function to optimize.
 * @returns The best solution found and its score.
 */
export const linear = ({
  seed,
  objectiveFunction,
}: IOptimizerParams): IOptimizerResult => {
  let bestScore = Infinity;
  let bestDesign: MenuType = [];

  const permutationsIterator = permutationSampler({
    candidate: seed,
    params: {},
  });

  for (const permutation of permutationsIterator) {
    const objectiveValue = objectiveFunction(permutation);

    if (objectiveValue < bestScore) {
      // Minimization task
      bestScore = objectiveValue;
      bestDesign = permutation;
    }
  }

  return { bestScore, bestDesign };
};
