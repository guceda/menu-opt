import { objectives, optimizers } from '../';
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
  close: { save: 0.4 },
  undo: { redo: 1 },
  about: { print: 0.5 },
};

const combinedObjFn: InnerObjectiveFnType = (candidate: MenuType) => {
  return (
    objectives.fitts({ frequencies })(candidate) +
    0.5 * objectives.associations({ associations })(candidate)
  );
};

const { bestDesign, bestScore } = optimizers.random({
  iterations: 1000,
  seed: menuEntries,
  objectiveFunction: combinedObjFn,
});

console.log(JSON.stringify({ bestDesign, bestScore }, null, 2));
