import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { formatPrice } from "../Data/FoodData";

export const OrderPrice = ({ subtotal, tax, total }) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={4}>
          <Typography variant="subtitle1">Sub-Total</Typography>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={3}>
          <Typography variant="subtitle1">{formatPrice(subtotal)}</Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={3}>
          <Typography variant="subtitle1">Tax</Typography>
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={3}>
          <Typography variant="subtitle1">{formatPrice(tax)}</Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={3}>
          <Typography variant="h5">Total</Typography>
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={3}>
          <Typography variant="h5">{formatPrice(total)}</Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};
