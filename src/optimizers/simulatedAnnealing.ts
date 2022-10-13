import { random as ramdomSampler } from '../samplers/random';
import { IOptimizerParams, IOptimizerResult } from './declarations';

export const simulatedAnnealing = ({
  seed,
  objectiveFunction,
  tmpMin = 0.001,
  tmpMax = 30,
  getTemp = (prevTemperature: number) => prevTemperature - 0.001,
}: IOptimizerParams): IOptimizerResult => {
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
