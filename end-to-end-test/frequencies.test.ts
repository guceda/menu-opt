import { random as randomOptimizer } from "../src/optimizers/random";

describe("linear menu", () => {
  test("fre", () => {
    const iterations = 100000;
    const seed = ["open", "save", "close", "undo", "saveas", "print", "redo"];
    const frequencies = {
      open: 4,
      save: 10,
      close: 1,
      undo: 2,
      saveas: 6,
      print: 1,
      redo: 1,
    };
    const [score, menu] = randomOptimizer(iterations, seed, frequencies);

    console.log({ score, menu: JSON.stringify(menu) });

    expect(menu).toStrictEqual([
      "save",
      "saveas",
      "open",
      "undo",
      "print",
      "redo",
      "close",
    ]);
  });
});
