import { useState, useEffect } from "react";

export const useOrders = () => {
  const [orders, setOrders] = useState(() => {
    const localData = localStorage.getItem("orders");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return {
    orders,
    setOrders,
  };
};
