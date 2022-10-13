import { MenuType } from '../declarations/dataStructures';

export type InnerObjectiveFnType = (candidate: MenuType) => number;

export type ObjectiveFnType<T> = (params: T) => InnerObjectiveFnType;
