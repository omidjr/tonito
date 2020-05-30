import { useState, useEffect } from "react";

export const useTotal = () => {
  const [totalPrice, setTotalPrice] = useState(() => {
    const localData = localStorage.getItem("totalPrice");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }, [totalPrice]);

  return {
    totalPrice,
    setTotalPrice,
  };
};
