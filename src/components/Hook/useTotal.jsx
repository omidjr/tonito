import { useState } from "react";

export const useTotal = () => {
  const [totalPrice, setTotalPrice] = useState();

  return {
    totalPrice,
    setTotalPrice,
  };
};
