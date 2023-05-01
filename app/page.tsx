import { Suspense } from 'react';
import Link from 'next/link';
import { getStocks } from 'frontend/prisma/queries';

export const revalidate = 3600; // revalidate every hour

export default async function HomePage() {
  const stocks = await getStocks();
  return (
    <>
      <Suspense>
        주식종목 리스트
        {stocks.map((a) => {
          return <div key={a.stockCode}>{a.stockName}</div>;
        })}
        <Link href={'/create'}>등록하기</Link>
      </Suspense>
    </>
  );
}
