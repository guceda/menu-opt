import { MenuType } from "../declarations/dataStructures";

export type ObjectiveFnType<T> = (params: T) => (candidate: MenuType) => number;
