import { IAssociations, IMenu } from "../types";
import { getAssociation } from "../utils/associations-utils";

export const associations = (menu: IMenu, associations: IAssociations) => {
  let sum = 0;
  for (let i = 0; i < menu.length; i++) {
    if (menu[i] == "-") continue;

    for (let j = 0; j < menu.length; j++) {
      if (menu[j] == "-") continue;

      // get association
      const association =
        getAssociation(menu[i], menu[j], associations) * Math.abs(i - j);

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
