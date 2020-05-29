import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles, pizzaRed } from "../Styles/Styles";
import { BillingDetails } from "./BillingDetails";
import { OrderDetails } from "./OrderDetails";

export const CheckOutForm = ({ setStep }) => {
  const classes = useStyles();

  return (
    <>
      <div
        className={classes.features}
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <Typography
          variant="h2"
          style={{ marginBottom: "30px", color: `${pizzaRed}` }}
        >
          Checkout
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            <BillingDetails setStep={setStep} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              style={{
                marginBottom: "15px",
              }}
            >
              Order Details
            </Typography>
            <OrderDetails />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
