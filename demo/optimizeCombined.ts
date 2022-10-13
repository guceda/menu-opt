import { objectives, optimizers } from '../src';
import {
  IAssociations,
  IFrequencies,
  MenuType,
} from '../src/declarations/dataStructures';
import { InnerObjectiveFnType } from '../src/objectiveFunctions';

// Group separators have to be provided as dashes ('-').
const menuEntries = [
  'open',
  'save',
  'close',
  'saveas',
  'print',
  'undo',
  'redo',
  'about',
  '-',
  '-',
  '-',
];

const frequencies: IFrequencies = {
  open: 4,
  save: 10,
  close: 1,
  saveas: 2,
  undo: 34,
  redo: 17,
};

// Associations with null size are not necessary.
const associations: IAssociations = {
  open: { close: 1 },
  save: { saveas: 0.9 },
  undo: { redo: 1 },
  about: { print: 0.6 },
};

const combinedObjFn: InnerObjectiveFnType = (candidate: MenuType) => {
  return (
    0.5 * objectives.fitts({ frequencies })(candidate) +
    objectives.associations({ associations })(candidate)
  );
};

const t0 = Date.now();
const { bestDesign: bestDesignRandom, bestScore: bestScoreRandom } =
  optimizers.random({
    iterations: 100000,
    seed: menuEntries,
    objectiveFunction: combinedObjFn,
  });

const t1 = Date.now() - t0;
console.log(
  JSON.stringify({ bestDesignRandom, bestScoreRandom, time: t1 }, null, 2)
);

const t2 = Date.now();
const { bestDesign: bestDesignAnnealing, bestScore: bestScoreAnnealing } =
  optimizers.simulatedAnnealing({
    iterations: 100000,
    seed: menuEntries,
    objectiveFunction: combinedObjFn,
  });

const t3 = Date.now() - t2;
console.log(
  JSON.stringify({ bestDesignAnnealing, bestScoreAnnealing, time: t3 }, null, 2)
);
