export type Edge<T> = {
  node: T;
};

export type ExchangeType = 'KOSPI' | 'KOSDAQ';

export type SEO = {
  title: string;
  description: string;
};

export type Stock = {
  stockCode: string;
  stockName: string;
  exchange: ExchangeType;
};
