import { createStock } from 'frontend/prisma/mutations';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<Response> {
  const body = await req.json();
  try {
    await createStock(body.query);
    return NextResponse.json({ status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500 });
  }
}
