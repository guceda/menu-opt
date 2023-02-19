import { MenuType } from '../declarations/dataStructures';

export interface ISamplersParams<T> {
  candidate: MenuType;
  params: T;
}

export type SamplersType<T> = (params: ISamplersParams<T>) => MenuType;
