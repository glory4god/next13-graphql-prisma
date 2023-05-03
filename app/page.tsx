import { Suspense } from 'react';
import Link from 'next/link';
import { getExamples } from 'frontend/prisma/queries';

export default async function HomePage() {
  const examples = await getExamples();
  return (
    <>
      <Suspense>
        Next13-Prisma-tailwindcss-template
        {examples.map((a, i) => {
          return <div key={i}>{`Example` + i}</div>;
        })}
        <Link href={'/create'}>등록페이지</Link>
      </Suspense>
    </>
  );
}
