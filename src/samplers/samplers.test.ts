import { random as randomSampler } from "./";

const mockedRandom = () => {
  let state = 0;
  return () => state--;
};

test("ramdom sampler", () => {
  expect(
    randomSampler({
      candidate: ["a", "b", "c"],
      params: { random: mockedRandom() },
    })
  ).toStrictEqual(["c", "b", "a"]);
});
