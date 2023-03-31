import { useState } from "react";

function useToggle(initialValue) {
  const [isOpen, setisOpen] = useState(initialValue);

  const handleChange = () => {
    setisOpen(!isOpen);
  };

  return [isOpen, handleChange];
}

export default useToggle;
