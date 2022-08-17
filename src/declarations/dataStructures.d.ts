export type MenuType = string[];

export interface IFrequencies {
  [key: string]: number;
}

export interface IAssociation {
  [key: string]: number;
}

export interface IAssociations {
  [key: string]: IAssociation;
}
