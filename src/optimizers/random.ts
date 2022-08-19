import { random as ramdomSampler } from "../samplers/random";
import { MenuType } from "../declarations/dataStructures";
import { IOptimizerParams, IOptimizerResult } from "./optimizers";

export const random = <T>({
  iterations,
  seed,
  objectiveFunction,
}: IOptimizerParams<T>): IOptimizerResult => {
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
