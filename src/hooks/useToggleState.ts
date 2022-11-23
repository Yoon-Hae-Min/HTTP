import { useState } from 'react';

interface Toggle {
  (initialState?: boolean): [boolean, React.Dispatch<React.SetStateAction<boolean>>, () => void];
}

const useToggleState: Toggle = (initialState) => {
  const [open, setOpen] = useState<boolean>(initialState ?? false);

  const toggle = () => {
    setOpen((pre) => !pre);
  };

  return [open, setOpen, toggle];
};

export default useToggleState;
