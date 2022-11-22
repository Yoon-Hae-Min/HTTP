import { useState } from 'react';

const useToggleState = (initialState: boolean) => {
  const [open, setOpen] = useState(initialState ?? false);

  const toggle = () => {
    setOpen((pre) => !pre);
  };

  return [open, setOpen, toggle];
};

export default useToggleState;
