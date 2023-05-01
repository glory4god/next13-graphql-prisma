import { Suspense } from 'react';
import Loading from 'app/loading';
import Form from 'frontend/components/Form';

export const revalidate = 3600; // revalidate every hour

export default function CreatePage() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Form />
      </Suspense>
    </>
  );
}
