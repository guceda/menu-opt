import { MenuType } from '../declarations/dataStructures';
import { InnerObjectiveFnType } from '../objectiveFunctions';

export interface IOptimizerParams {
  seed: MenuType;
  objectiveFunction: InnerObjectiveFnType;
}

export interface IOptimizerResult {
  bestScore: number;
  bestDesign: MenuType;
}
