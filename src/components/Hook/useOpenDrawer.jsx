import { useState } from "react";

export const useOpenDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState();

  return {
    openDrawer,
    setOpenDrawer,
  };
};
