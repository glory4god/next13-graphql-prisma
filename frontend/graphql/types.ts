export type Edge<T> = {
  node: T;
};

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type SEO = {
  title: string;
  description: string;
};

export type Stocks = {
  stockCode: string;
  stockName: string;
  exchange: string;
  seo: SEO;
  tags: string[];

  updatedAt: string;
};
export type StocksOperation = {
  data: {
    // stocks: Connection<Stocks>;
    stocks: Stocks[];
  };
  variables: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
  };
};
