import { MenuType } from '../declarations/dataStructures';
import { InnerObjectiveFnType } from '../objectiveFunctions';

export interface IOptimizerParams {
  seed: MenuType;
  objectiveFunction: InnerObjectiveFnType;
  [key: string]: unknown;
}

export interface IOptimizerResult {
  bestScore: number;
  bestDesign: MenuType;
}
