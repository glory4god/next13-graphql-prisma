import React, { useCallback, useState } from 'react';

export const useForm = <T>(initialState: T) => {
  const [form, setForm] = useState<T>(initialState);

  const onFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({
        ...prev,
        [name]: value
      }));
    },
    []
  );

  const onFormReset = useCallback(() => setForm(initialState), [initialState]);

  return { form, setForm, onFormChange, onFormReset };
};

export default useForm;
