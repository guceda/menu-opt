import { IAssociations } from "../declarations/dataStructures";

export const getAssociation = (
  el1: string,
  el2: string,
  associations: IAssociations
) => {
  // Try both directions
  return Math.max(associations[el1]?.[el2] || 0, associations[el2]?.[el1] || 0);
};

