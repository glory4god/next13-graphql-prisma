import { Example } from '../types';
import prisma from 'backend/prisma/prisma';

export function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function createExample(body: Example) {
  await sleep(1000);
  const example = await prisma?.example.create({
    data: { ...body }
  });
  return example;
}
