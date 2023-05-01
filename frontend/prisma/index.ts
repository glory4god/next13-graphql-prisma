import { Stock } from './types';

const MY_API_ENDPOINT = '/api';
const domain = process.env.SITE_DOMAIN!;
const endpoint = `${domain ? domain : ''}${MY_API_ENDPOINT}`;

export async function myFetch<T>({
  url,
  query,
  headers,
  method = 'POST',
  cache = 'force-cache'
}: {
  url: string;
  query: Object;
  method?: 'POST' | 'DELETE' | 'PUT';
  headers?: HeadersInit;
  cache?: RequestCache;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(`${endpoint}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify({
        ...(query && { query })
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
    throw {
      status: 500,
      message: e,
      query
    };
  }
}
export async function createStock(body: Stock): Promise<Stock> {
  const res = await myFetch<Stock>({
    url: '/stock',
    query: body,
    cache: 'no-store'
  });

  return res.body;
}
