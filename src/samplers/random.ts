import { IMenu } from "../types";

export const random = (seed: IMenu) =>
  seed
    .map((x) => ({ val: x, pos: Math.random() }))
    .sort((a, b) => a.pos - b.pos)
    .map((x) => x.val);
