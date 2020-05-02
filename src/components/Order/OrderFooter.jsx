import React from "react";
import { OrderMenuFooter, ConfirmButton } from "../Styles/Styles";
import { Typography } from "@material-ui/core";

export const OrderFooter = (orders) => {
  return (
    <OrderMenuFooter>
      <ConfirmButton onClick={() => console.log(orders)}>
        <Typography>Confirm</Typography>
      </ConfirmButton>
    </OrderMenuFooter>
  );
};
