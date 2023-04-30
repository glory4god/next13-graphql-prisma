import { SHOPIFY_GRAPHQL_API_ENDPOINT } from './constants';
import { getStocksQuery } from './queries/stock';
import { isError } from './type-guards';
import { Stocks, StocksOperation } from './types';

const domain = `https://${process.env.STORE_DOMAIN!}`;
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

export async function customFetch<T>({
  query,
  variables,
  headers,
  cache = 'force-cache'
}: {
  query: string;
  variables?: ExtractVariables<T>;
  headers?: HeadersInit;
  cache?: RequestCache;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables })
      }),
      cache,
      next: { revalidate: 900 } // 15 minutes
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body
    };
  } catch (e) {
    if (isError(e)) {
      throw {
        status: e.status || 500,
        message: e.message,
        query
      };
    }

    throw {
      error: e,
      query
    };
  }
}

export async function getStocks({
  query,
  reverse,
  sortKey
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Stocks[]> {
  const res = await customFetch<StocksOperation>({
    query: getStocksQuery,
    variables: {
      query,
      reverse,
      sortKey
    }
  });

  return res.body.data.stocks;
  // return reshapeProducts(removeEdgesAndNodes(res.body.data.stocks));
}
