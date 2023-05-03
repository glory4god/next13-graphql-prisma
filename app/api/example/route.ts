import { createExample } from 'backend/prisma/mutations';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<Response> {
  const body = await req.json();
  try {
    await createExample(body.query);
    return NextResponse.json({ status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500 });
  }
}
