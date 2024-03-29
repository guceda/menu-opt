import { SamplersType } from './declarations';

export interface IRandomParam {
  random?: () => number;
}

/**
 * Returns a menu sample by randomly permutating its elements.
 * @param params
 * @param params.candidate - Candidate menu
 * @param params.params - Random function
 * @returns Candidate menu
 */
export const random: SamplersType<IRandomParam> = ({
  candidate,
  params: { random = Math.random },
}) =>
  candidate
    .map((x) => ({ val: x, pos: random() }))
    .sort((a, b) => a.pos - b.pos)
    .map((x) => x.val);
