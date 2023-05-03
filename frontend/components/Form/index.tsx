'use client';

import { useCallback } from 'react';

import clsx from 'clsx';
import { useForm } from 'frontend/hooks';
import { ExampleInit } from 'frontend/prisma/fragments';
import { createExample } from 'frontend/prisma/mutations';
import { Example } from 'types/types';

const inputClass = `
h-[44px] rounded-[1px] border-b-2 border-gray-300 px-2 pb-1
text-lg text-[26px] text-gray-600 outline-none transition-all 
duration-150 focus:border-red-300`;

export default function Form() {
  const { form, onFormChange, onFormReset } = useForm(ExampleInit);

  const onPost = useCallback(
    async (form: Example) => {
      try {
        await createExample(form);
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
        <input name="id" value={form.id} onChange={onFormChange} className={clsx(inputClass)} />
      </div>
      <div>
        <input name="name" value={form.name} onChange={onFormChange} className={clsx(inputClass)} />
      </div>
      <button onClick={() => onPost(form)}>등록</button>
    </div>
  );
}
