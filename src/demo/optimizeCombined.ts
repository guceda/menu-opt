import { objectives, optimizers } from "..";
import {
  IAssociations,
  IFrequencies,
  MenuType,
} from "../declarations/dataStructures";
import { ObjectiveFnType } from "../objectiveFunctions";

// Group separators have to be provided as dashes ('-').
const menuEntries = ["open", "save", "-", "-", "close", "saveas"];

const frequencies: IFrequencies = { open: 4, save: 10, close: 1, saveas: 2 };

// Associations with null size are not necessary.
const associations: IAssociations = {
  open: { close: 1 },
  save: { saveas: 0.9 },
  close: { save: 0.4 },
};

const combinedObjFn: ObjectiveFnType<{
  associations: IAssociations;
  frequencies: IFrequencies;
}> = () => (candidate: MenuType) => {
  return (
    objectives.fitts({ frequencies })(candidate) +
    0.5 * objectives.associations({ associations })(candidate)
  );
};

const { bestDesign, bestScore } = optimizers.random({
  iterations: 1000,
  seed: menuEntries,
  params: { frequencies },
  objectiveFunction: combinedObjFn,
});

console.log(JSON.stringify({ bestDesign, bestScore }, null, 2));
