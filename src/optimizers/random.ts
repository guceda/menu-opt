import { random as ramdomSampler } from "../samplers/random";
import { MenuType } from "../dataStructures";
import { IOptimizerParams, IOptimizerResult } from "./optimizers";

export const random = <T>({
  iterations,
  seed,
  params,
  objectiveFunction,
}: IOptimizerParams<T>): IOptimizerResult => {
  let bestScore = Infinity;
  let bestDesign: MenuType = [];

  for (let i = 0; i < iterations; ++i) {
    const candidate = ramdomSampler(seed);
    const objectiveValue = objectiveFunction({ candidate, params });

    if (objectiveValue < bestScore) {
      // Minimization task
      bestScore = objectiveValue;
      bestDesign = candidate;
    }
  }
  return { bestScore, bestDesign };
};
