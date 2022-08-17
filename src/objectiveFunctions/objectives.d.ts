import { MenuType } from "../declarations/dataStructures";

interface IObjectiveFnParams<T> {
  candidate: MenuType;
  params: T;
}

export type ObjectiveFnType<T> = (params: IObjectiveFnParams<T>) => number;
