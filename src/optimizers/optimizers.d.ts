import { MenuType } from "../declarations/dataStructures";
import { ObjectiveFnType,IObjectiveFnParams } from "../objectiveFunctions";

export interface IOptimizerParams<T> {
  iterations: number;
  seed: MenuType;
  params: IObjectiveFnParams<T>["params"];
  objectiveFunction: ObjectiveFnType<T>;
}

export interface IOptimizerResult {
  bestScore: number;
  bestDesign: MenuType;
}
