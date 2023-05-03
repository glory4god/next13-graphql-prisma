import prisma from 'backend/prisma/prisma';

export function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
export async function getExamples() {
  await sleep(3000);
  const examples = await prisma?.example.findMany();
  return examples;
}
