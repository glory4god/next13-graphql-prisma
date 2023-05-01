'use client';

import { useCallback } from 'react';

import clsx from 'clsx';
import { useForm } from 'frontend/hooks';
import { StockInit } from 'frontend/prisma/fragments';
import { Stock } from 'frontend/prisma/types';
import { createStock } from 'frontend/prisma';

const inputClass = `
h-[44px] rounded-[1px] border-b-2 border-gray-300 px-2 pb-1
text-lg text-[26px] text-gray-600 outline-none transition-all 
duration-150 focus:border-red-300`;

export default function Form() {
  const { form, onFormChange, onFormReset } = useForm(StockInit);

  const onPost = useCallback(
    async (form: Stock) => {
      try {
        await createStock(form);
        onFormReset();
      } catch (e) {
        console.log(e);
      }
    },
    [onFormReset]
  );

  return (
    <div>
      <div>
        <input
          name="stockCode"
          value={form.stockCode}
          onChange={onFormChange}
          className={clsx(inputClass)}
        />
      </div>
      <div>
        <input
          name="stockName"
          value={form.stockName}
          onChange={onFormChange}
          className={clsx(inputClass)}
        />
      </div>
      <div>
        <input
          name="exchange"
          value={form.exchange}
          onChange={onFormChange}
          className={clsx(inputClass)}
        />
      </div>
      <button onClick={() => onPost(form)}>등록</button>
    </div>
  );
}
