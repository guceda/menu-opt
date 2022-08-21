import { ObjectiveFnType } from './objectives';
import { fitts as fittsLaw } from '../laws/fitts';
import { IFrequencies } from '../declarations/dataStructures';

export interface IFittsParams {
  frequencies: IFrequencies;
}

export const fitts: ObjectiveFnType<IFittsParams> =
  ({ frequencies }) =>
  (candidate) => {
    const costs = fittsLaw(candidate);
    // Compute sum weighted by click frequencies
    const totalCost = candidate.reduce(
      (acc: number, _entry: string, idx: number) => {
        acc += costs[idx] * (frequencies[candidate[idx]] || 0);
        return acc;
      },
      0
    );
    return totalCost;
  };
