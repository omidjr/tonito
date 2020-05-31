import React from "react";
import { Button } from "@material-ui/core";
import { bg } from "../Styles/Styles";

export const PlaceOrder = ({ userInfo, setUserInfo, initialState }) => {
  return (
    <Button
      style={{
        width: "100%",
        background: `${bg}`,
        color: "#fff",
        fontSize: "1rem",
        borderRadius: "30px",
      }}
      onClick={(e) => {
        e.preventDefault();
        console.log(userInfo);
        setUserInfo(initialState);
      }}
    >
      Place Order
    </Button>
  );
};
