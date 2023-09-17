export interface IOption {
  label: string;
  value: string;
}

export interface ITableHeader {
  label?: string;
  key: string;
  index?: number;
  action?: any;
}

export interface IResponsePagination {
  limit: number;
  skip: number;
  total: number;
}

export interface IFetchParams {
  skip?: number;
  limit?: number;
}
