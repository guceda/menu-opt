import { IAssociations } from "../types";

export const getAssociation = (
  el1: string,
  el2: string,
  associations: IAssociations
) => {
  // Try both directions
  return Math.max(associations[el1][el2] || 0, associations[el2][el1] || 0);
};

export const proxyAssociations = (
  associations: IAssociations,
  fallbackValue = 0
) => {
  const handler = {
    get: (obj, prop) => {
      if (prop in obj) {
        if (typeof obj[prop] === "object") {
          return new Proxy(obj[prop], handler);
        }
        return obj[prop];
      }
      return fallbackValue;
    },
  };
  return new Proxy(associations, handler);
};
