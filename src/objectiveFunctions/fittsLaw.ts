import { ObjectiveFnType } from './declarations';
import { fitts as fittsLaw } from '../laws/fitts';
import { IFrequencies } from '../declarations/dataStructures';

export interface IFittsParams {
  frequencies: IFrequencies;
}

/**
 * Fitts' law objective function for menu selection.
 * Fitts' Law is a human performance model used to predict the time
 * required to rapidly move to a target area, as a function of the
 * distance to the target and the size of the target.
 * @param frequencies - Object mapping each menu item to its selection frequency.
 * @returns The objective function that computes the total cost of selecting the given menu.
 */
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
