import { MenuType } from '../declarations/dataStructures';
import { InnerObjectiveFnType } from '../objectiveFunctions';

export interface IOptimizerParams {
  seed: MenuType;
  objectiveFunction: InnerObjectiveFnType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface IOptimizerResult {
  bestScore: number;
  bestDesign: MenuType;
}
