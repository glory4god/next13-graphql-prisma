import prisma from 'backend/prisma/prisma';

export function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
export async function getStocks() {
  console.log();
  await sleep(3000);
  const posts = await prisma?.stock.findMany();
  return posts;
}
