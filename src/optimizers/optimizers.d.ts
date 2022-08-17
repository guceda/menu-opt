import { MenuType } from "../dataStructures";

export interface IOptimizerParams<T> {
  iterations: number;
  seed: MenuType;
  params: ObjectiveFnParams<T>["params"];
  objectiveFunction: ObjectiveFnType<T>;
}

export interface IOptimizerResult {
  bestScore: number;
  bestDesign: MenuType;
}
