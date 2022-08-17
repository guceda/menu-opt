interface IObjectiveFnParams<T> {
  candidate: IMenu;
  params: T;
}

export type ObjectiveFnType<T> = (params: IObjectiveFnParams<T>) => number;
