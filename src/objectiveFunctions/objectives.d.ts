import { MenuType } from "../declarations/dataStructures";

export type InnerObjectiveFnType<T> = (candidate: MenuType) => number;

export type ObjectiveFnType<T> = (params: T) => InnerObjectiveFnType<T>;
