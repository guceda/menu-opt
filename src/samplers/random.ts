import { SamplersType } from "./samplers";

export const random: SamplersType = (seed) =>
  seed
    .map((x) => ({ val: x, pos: Math.random() }))
    .sort((a, b) => a.pos - b.pos)
    .map((x) => x.val);
