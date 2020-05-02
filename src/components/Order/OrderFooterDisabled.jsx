import React from "react";
import { OrderMenuFooter, ConfirmButton } from "../Styles/Styles";
import { Typography } from "@material-ui/core";

export const OrderFooterDisabled = (disabled) => {
  return (
    <OrderMenuFooter>
      <ConfirmButton disabled={disabled}>
        <Typography>Confirm</Typography>
      </ConfirmButton>
    </OrderMenuFooter>
  );
};
