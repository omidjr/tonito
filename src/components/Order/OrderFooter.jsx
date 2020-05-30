import React from "react";
import { OrderMenuFooter, ConfirmButton } from "../Styles/Styles";
import { formatPrice } from "../Data/FoodData";
import { Typography } from "@material-ui/core";

export const OrderFooter = ({ orders, total, setStep, setTotalPrice }) => {
  return (
    <OrderMenuFooter>
      <ConfirmButton
        onClick={() => {
          setTotalPrice(total);
          setStep(2);
          console.log(orders);
        }}
      >
        <Typography>Confirm: {formatPrice(total)}</Typography>
      </ConfirmButton>
    </OrderMenuFooter>
  );
};
