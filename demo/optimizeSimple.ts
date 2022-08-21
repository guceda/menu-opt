import { objectives, optimizers } from '../src';
import { IFrequencies } from '../src/declarations/dataStructures';

const menuEntries = ['open', 'save', 'close', 'saveas'];

const frequencies: IFrequencies = { open: 4, save: 10, close: 1, saveas: 2 };

const { bestDesign, bestScore } = optimizers.random({
  iterations: 1000,
  seed: menuEntries,
  objectiveFunction: objectives.fitts({ frequencies }),
});

console.log(JSON.stringify({ bestDesign, bestScore }, null, 2));
