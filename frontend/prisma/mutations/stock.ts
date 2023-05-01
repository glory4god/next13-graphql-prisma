import { Stock } from '../types';
import prisma from 'backend/prisma/prisma';

export function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function createStock(body: Stock) {
  await sleep(1000);
  const stock = await prisma?.stock.create({
    data: { ...body }
  });
  return stock;
}
