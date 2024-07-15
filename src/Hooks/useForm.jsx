import React from 'react';

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('null');

  function onChange({ target }) {
    setValue(target.value);
  }

  return { value, setValue, onChange };
};

export default useForm;
