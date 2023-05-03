import { Example } from 'types/types';
import { myFetch } from '..';

export async function createExample(body: Example): Promise<Example> {
  const res = await myFetch<Example>({
    url: '/example',
    query: body,
    cache: 'no-store'
  });

  return res.body;
}
