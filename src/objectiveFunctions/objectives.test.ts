import { proxyAssociations } from "../utils/associations";
import { associations as associationsObj } from "./associations";
import { fitts as fittsObj } from "./fittsLaw";

describe("objective functions", () => {
  test("associations", () => {
    const runOne = associationsObj({
      candidate: ["a", "c", "b"],
      params: {
        associations: proxyAssociations({ a: { b: 0.5 }, b: { c: 0.5 } }),
      },
    });
    const runTwo = associationsObj({
      candidate: ["a", "b", "c"],
      params: {
        associations: proxyAssociations({ a: { b: 0.5 }, b: { c: 0.5 } }),
      },
    });
    expect(runOne).toBeGreaterThan(runTwo);
  });
  test("fitts", () => {
    const runOne = fittsObj({
      candidate: ["a", "c", "b"],
      params: { frequencies: { a: 3, b: 10, c: 7 } },
    });
    const runTwo = fittsObj({
      candidate: ["b", "c", "a"],
      params: { frequencies: { a: 3, b: 10, c: 7 } },
    });
    expect(runOne).toBeGreaterThan(runTwo);
  });
});
