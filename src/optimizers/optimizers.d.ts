import { IMenu } from "..";

export interface IOptimizerParams<T> {
  iterations: number;
  seed: IMenu;
  params: ObjectiveFnParams<T>["params"];
  objectiveFunction: ObjectiveFnType<T>;
}

export interface IOptimizerResult {
  bestScore: number;
  bestDesign: IMenu;
}
