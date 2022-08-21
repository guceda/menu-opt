import { IAssociations } from '../declarations/dataStructures';

/**
 * Retrieves the association score for a given pair of entries. It works sideways. If no match is found it returns a fallback
 * @param el1 - Menu entry
 * @param el2 - Menu entry
 * @param associations - Associations map
 * @returns Association value [0,1]
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
