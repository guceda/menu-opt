import { MenuType } from "../declarations/dataStructures";
import {
  ObjectiveFnType,
  IObjectiveFnParams,
  InnerObjectiveFnType,
} from "../objectiveFunctions";

export interface IOptimizerParams<T> {
  iterations: number;
  seed: MenuType;
  objectiveFunction: InnerObjectiveFnType<T>;
}

export interface IOptimizerResult {
  bestScore: number;
  bestDesign: MenuType;
}
