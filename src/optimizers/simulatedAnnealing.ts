import { random as ramdomSampler } from '../samplers/random';
import { IOptimizerParams, IOptimizerResult } from './declarations';

/**
 * Simulated annealing optimization algorithm. A metaheuristic optimization algorithm that
 * uses a probabilistic approach to search for the global minimum of a
 * function in a large search space.
 * @param seed - The initial design to start from.
 * @param objectiveFunction - A function that evaluates the energy of a design.
 * @param tmpMin - The minimum temperature for the annealing process.
 * @param tmpMax - The maximum temperature for the annealing process.
 * @param getTemp - A function that returns the next temperature based on the previous temperature.
 * @returns The best design and its associated energy score.
 */
export const simulatedAnnealing = ({
  seed,
  objectiveFunction,
  tmpMin = 0.001,
  tmpMax = 30,
  getTemp = (prevTemperature: number) => prevTemperature - 0.001,
}: IOptimizerParams & {
  tmpMin?: number;
  tmpMax?: number;
  getTemp?: (prevTemperature: number) => number;
}): IOptimizerResult => {
  let currTmp = tmpMax;

  let lastSample = seed;
  let lastScore = objectiveFunction(lastSample);

  let bestDesign = lastSample;
  let bestEnergy = lastScore;

  while (currTmp > tmpMin) {
    const currentState = ramdomSampler({
      candidate: seed,
      params: { random: Math.random },
    });
    const currentEnergy = objectiveFunction(currentState);

    if (currentEnergy < lastScore) {
      lastSample = currentState;
      lastScore = currentEnergy;
    } else {
      if (Math.random() <= Math.exp(-(currentEnergy - lastScore) / currTmp)) {
        lastSample = currentState;
        lastScore = currentEnergy;
      }
    }

    if (bestEnergy > lastScore) {
      bestDesign = lastSample;
      bestEnergy = lastScore;
    }
    currTmp = getTemp(currTmp);
  }
  return { bestScore: bestEnergy, bestDesign };
};
