import { random as ramdomSampler } from '../samplers/random';
import { MenuType } from '../declarations/dataStructures';
import { IOptimizerParams, IOptimizerResult } from './declarations';

/**
 *
 * @param param
 * @param param.iterations - Number of iterations
 * @param param.seed - Candidate menu
 * @param param.objectiveFunction - Objective function to be used
 * @returns Best score and best scoring menu
 */
export const random = ({
  iterations,
  seed,
  objectiveFunction,
}: IOptimizerParams): IOptimizerResult => {
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
