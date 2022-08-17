import { random as randomOptimizer } from "./random";

describe("optimizers", () => {
  test("ramdom", () => {
    expect(
      randomOptimizer({
        iterations: 10,
        seed: ["c", "a", "b"],
        params: {},
        objectiveFunction: ({ candidate }) => candidate.indexOf("a"),
      }).bestDesign[0]
    ).toBe("a");
  });
});
