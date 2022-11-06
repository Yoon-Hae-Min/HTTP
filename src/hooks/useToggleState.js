import { useState } from "react";

const useToggleState = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((pre) => !pre);
  };

  return [open, setOpen, toggle];
};

export default useToggleState;
