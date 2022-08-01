import { random as randomOptimizer } from "../src/optimizers/random";

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

console.log(score, menu);
