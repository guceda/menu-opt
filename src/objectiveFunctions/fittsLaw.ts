import { fitts as fittsLaw } from "../laws/fitts";
import { IFrequencies, IMenu } from "../types";

export const fitts = (menu: IMenu, frequencies: IFrequencies) => {
  const costs = fittsLaw(menu);
  // Compute sum weighted by click frequencies
  const totalCost = menu.reduce((acc, _entry, idx) => {
    acc += costs[idx] * (frequencies[menu[idx]] || 0);
    return acc;
  }, 0);
  return totalCost;
};
