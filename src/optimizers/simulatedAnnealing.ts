import { random as ramdomSampler } from '../samplers/random';
import { IOptimizerParams, IOptimizerResult } from './declarations';

export const simulatedAnnealing = ({
  seed,
  objectiveFunction,
  tempMin = 0.001,
  tempMax = 15,
  getTemp = (prevTemperature: number) => prevTemperature - 0.001,
}: IOptimizerParams): IOptimizerResult => {
  let currentTemp = tempMax;

  let lastState = seed;
  let lastEnergy = objectiveFunction(lastState);

  let bestDesign = lastState;
  let bestEnergy = lastEnergy;

  while (currentTemp > tempMin) {
    let currentState = ramdomSampler({
      candidate: seed,
      params: { random: Math.random },
    });
    let currentEnergy = objectiveFunction(currentState);

    if (currentEnergy < lastEnergy) {
      lastState = currentState;
      lastEnergy = currentEnergy;
    } else {
      if (
        Math.random() <= Math.exp(-(currentEnergy - lastEnergy) / currentTemp)
      ) {
        lastState = currentState;
        lastEnergy = currentEnergy;
      }
    }

    if (bestEnergy > lastEnergy) {
      bestDesign = lastState;
      bestEnergy = lastEnergy;
    }
    currentTemp = getTemp(currentTemp);
  }
  return { bestScore: bestEnergy, bestDesign };
};
