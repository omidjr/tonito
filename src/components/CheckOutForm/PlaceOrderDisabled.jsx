import React from "react";
import { Button } from "@material-ui/core";

export const PlaceOrderDisabled = () => {
  return (
    <Button
      style={{
        width: "100%",
        background: "#ccc",
        color: "#000",
        fontSize: "1rem",
        borderRadius: "30px",
      }}
      disabled
    >
      Place Order
    </Button>
  );
};
