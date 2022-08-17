import { SamplersType } from "./samplers";

export interface IRandomParam {
  random?: () => number;
}

export const random: SamplersType<IRandomParam> = ({
  candidate,
  params: { random = Math.random },
}) =>
  candidate
    .map((x) => ({ val: x, pos: random() }))
    .sort((a, b) => a.pos - b.pos)
    .map((x) => x.val);
