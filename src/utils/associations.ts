import { IAssociations } from '../declarations/dataStructures';

/**
 * Returns the association strength between two elements based on a provided set of associations.
 * @param el1 - The first element.
 * @param el2 - The second element.
 * @param associations - An object that maps pairs of elements to their association values.
 * @param fallback - The value to return if no association is found.
 * @returns The association value between the two elements, or the fallback value if no association is found.
 */
export const getAssociation = (
  el1: string,
  el2: string,
  associations: IAssociations,
  fallback = 0
) => {
  // Try both directions
  return Math.max(
    associations[el1]?.[el2] || fallback,
    associations[el2]?.[el1] || fallback
  );
};
