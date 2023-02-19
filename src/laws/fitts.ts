import { MenuType } from '../declarations/dataStructures';

/**
 * Computes the movement time (in seconds) for a given menu using Fitts' law.
 * @param {MenuType} menu - The menu to compute the movement time for.
 * @param {number} a - The intercept parameter for the Fitts' law regression equation.
 * @param {number} b - The slope parameter for the Fitts' law regression equation.
 * @returns {number[]} The movement time (in seconds) for each entry in the menu.
 */
export const fitts = (menu: MenuType, a = 0.2, b = 0.3) => {
  const mt = menu.map((_entry, idx) => a + b * Math.log2(idx + 1));
  return mt;
};
