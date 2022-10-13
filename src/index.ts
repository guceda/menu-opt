// LAWS
import { fitts as fittsLaw } from './laws/fitts';
// OBJECTIVE FUNCTIONS
import { associations as objectiveAssoc } from './objectiveFunctions/associations';
import { fitts as objectiveFitts } from './objectiveFunctions/fittsLaw';
// OPTIMIZERS
import { random as randomOptimizer } from './optimizers';
import { simulatedAnnealing as simulatedAnnealingOptimizer } from './optimizers';
// SAMPLERS
// import { random as randomSampler } from "./samplers/random";

const laws = { fitts: fittsLaw };
const objectives = { associations: objectiveAssoc, fitts: objectiveFitts };
const optimizers = {
  random: randomOptimizer,
  simulatedAnnealing: simulatedAnnealingOptimizer,
};
// const samplers = { random: randomSampler }; // INTERNAL

export { laws, objectives, optimizers /* samplers */ };
