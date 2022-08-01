const { ramdomsampler } = require("./samplers");

const mockedRandom = () => {
  let state = 0;
  return () => state--;
};

test("ramdom sampler", () => {
  expect(ramdomsampler(["a", "b", "c"], mockedRandom())).toStrictEqual([
    "c",
    "b",
    "a",
  ]);
});
