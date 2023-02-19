import { ObjectiveFnType } from './declarations';
import { IAssociations } from '../declarations/dataStructures';
import { getAssociation } from '../utils/associations';

export interface IAssociationsParams {
  associations: IAssociations;
}

/**
 * Calculates the sum of association values between pairs of items in a candidate sequence,
 * weighted by their distance and penalizing unrelated but adjacent items.
 * @param {IAssociationsParams} param0 - An object containing the associations matrix.
 * @returns {ObjectiveFnType} An objective function that takes a candidate and returns its associations score.
 */
export const associations: ObjectiveFnType<IAssociationsParams> =
  ({ associations }) =>
  (candidate) => {
    let sum = 0;
    for (let i = 0; i < candidate.length; i++) {
      if (candidate[i] == '-') continue;

      for (let j = 0; j < candidate.length; j++) {
        if (candidate[j] == '-') continue;

        // get association
        const association =
          getAssociation(candidate[i], candidate[j], associations) *
          Math.abs(i - j);

        // unrelated but close, should not be next to each other
        if (association == 0 && Math.abs(i - j) == 1) {
          sum += 1.0; // penalty
        } else {
          sum += association;
        }
      }
    }
    return sum;
  };
