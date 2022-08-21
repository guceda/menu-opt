import { MenuType } from '../declarations/dataStructures';

export const fitts = (menu: MenuType, a = 0.2, b = 0.3) => {
  const mt = menu.map((_entry, idx) => a + b * Math.log2(idx + 1));
  return mt;
};
