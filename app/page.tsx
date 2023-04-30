import { Suspense } from 'react';
import { getStocks } from 'frontend/prisma/queries';
import Loading from './loading';

export const revalidate = 3600; // revalidate every hour

export default async function HomePage() {
  const stocks = await getStocks();
  return (
    <>
      <Suspense fallback={<Loading />}>
        HomePage
        {stocks.map((a) => {
          return <div key={a.stockCode}>{a.stockName}</div>;
        })}
      </Suspense>
    </>
  );
}
