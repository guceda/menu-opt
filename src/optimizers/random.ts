import { objectiveFitts } from "../objectiveFunctions/fittsLaw";
import { ramdomsampler } from "../samplers/samplers";
import { IFrequencies, IMenu } from "../types";

export const random = (
  iterations: number,
  seed: IMenu,
  frequencies: IFrequencies
) => {
  let bestValue = Infinity;
  let bestDesign: IMenu = [];

  for (let i = 0; i < iterations; ++i) {
    const candidate = ramdomsampler(seed);
    const objectiveValue = objectiveFitts(candidate, frequencies);

    if (objectiveValue < bestValue) {
      // Minimization task
      bestValue = objectiveValue;
      bestDesign = candidate;
    }
  }
  return [bestValue, bestDesign];
};
