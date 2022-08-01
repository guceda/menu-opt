import { fitts as objectiveFitts } from "../objectiveFunctions/fittsLaw";
import { random as ramdomSampler } from "../samplers/random";
import { IFrequencies, IMenu } from "../types";

export const random = (
  iterations: number,
  seed: IMenu,
  frequencies: IFrequencies
) => {
  let bestValue = Infinity;
  let bestDesign: IMenu = [];

  for (let i = 0; i < iterations; ++i) {
    const candidate = ramdomSampler(seed);
    const objectiveValue = objectiveFitts(candidate, frequencies);

    if (objectiveValue < bestValue) {
      // Minimization task
      bestValue = objectiveValue;
      bestDesign = candidate;
    }
  }
  return [bestValue, bestDesign];
};
