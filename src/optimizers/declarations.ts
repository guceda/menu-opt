import { MenuType } from '../declarations/dataStructures';
import { InnerObjectiveFnType } from '../objectiveFunctions';

export interface IOptimizerParams {
  iterations: number;
  seed: MenuType;
  objectiveFunction: InnerObjectiveFnType;
}

export interface IOptimizerResult {
  bestScore: number;
  bestDesign: MenuType;
}
