import { random as ramdomSampler } from '../samplers/random';
import { MenuType } from '../declarations/dataStructures';
import { IOptimizerParams, IOptimizerResult } from './declarations';

/**
 * Random search optimization algorithm.
 * @param iterations - The number of iterations to perform.
 * @param seed - The seed menu to start with.
 * @param objectiveFunction - The function to optimize.
 * @returns The best solution found and its score.
 */
export const random = ({
  iterations,
  seed,
  objectiveFunction,
}: IOptimizerParams & { iterations: number }): IOptimizerResult => {
  let bestScore = Infinity;
  let bestDesign: MenuType = [];

  for (let i = 0; i < iterations; ++i) {
    const candidate = ramdomSampler({ candidate: seed, params: {} });
    const objectiveValue = objectiveFunction(candidate);

    if (objectiveValue < bestScore) {
      // Minimization task
      bestScore = objectiveValue;
      bestDesign = candidate;
    }
  }
  return { bestScore, bestDesign };
};
