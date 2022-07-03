import React, {useState} from 'react';
const useFormInput = initial => {
  const [value, setValue] = useState(initial);
  const [isChange, setIsChange] = useState(false);
  const onChange = text => [setValue(text), setIsChange(true)];
  return {
    value,
    onChange,
    isChange,
  };
};

export default useFormInput;
