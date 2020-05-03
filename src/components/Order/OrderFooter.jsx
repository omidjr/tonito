import React from "react";
import { OrderMenuFooter, ConfirmButton } from "../Styles/Styles";
import { formatPrice } from "../Data/FoodData";
import { Typography } from "@material-ui/core";

export const OrderFooter = ({ orders, total }) => {
  return (
    <OrderMenuFooter>
      <ConfirmButton onClick={() => console.log(orders)}>
        <Typography>Confirm: {formatPrice(total)}</Typography>
      </ConfirmButton>
    </OrderMenuFooter>
  );
};
