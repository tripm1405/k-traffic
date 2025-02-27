export interface IKGetByOffsetApiData<TItem> {
  items: TItem[];
  page: number;
  size: number;
  total: number;
}

export interface IKByOffsetApiRequestParams {
  page?: number;
  size?: number;
  sort?: IKByOffsetApiRequestOrderByParams[];
  listFilter?: IKByOffsetApiRequestFilterParams[];
}

export interface IKByOffsetApiRequestOrderByParams {
  property: string;
  type: IKByOffsetApiRequestOrderByParamsType;
}

export enum IKByOffsetApiRequestOrderByParamsType {
  'Ascending' = 0,
  'Descending' = 1,
}

export interface IKByOffsetApiRequestFilterParams {
  property: string;
  type: IKByOffsetApiRequestFilterParamsType;
  data: unknown;
}

export enum IKByOffsetApiRequestFilterParamsType {
  'In_Str_AllWithOrder' = 0,
  'Out_Str_Any' = 1,
}
