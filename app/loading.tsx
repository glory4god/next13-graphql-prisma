'use client';

const circle = 'h-3 w-3 animate-pulse rounded-[50%] bg-red-300';

export default function Loading() {
  return (
    <div className="fixed left-0 top-0 m-auto h-screen w-screen bg-dark bg-opacity-20">
      <div className="flex h-full w-full items-center justify-center space-x-2">
        <div className={circle}></div>
        <div className={circle}></div>
        <div className={circle}></div>
      </div>
    </div>
  );
}
