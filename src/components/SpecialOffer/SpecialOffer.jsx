import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { useStyles } from "../Styles/Styles";

let order22 = {};

export const SpecialOffer = ({ orders, setOrders }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.special}>
        <div className={classes.specialImage} />
        <div className={classes.specialText}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4" className={classes.preTitle}>
                <span>SPECIAL OFFER</span>
              </Typography>
              <hr style={{ background: "#fff" }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h1" style={{ paddingBottom: "50px" }}>
                Hawaiian
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.productPrice}>
                <span className={classes.price}>
                  <span class={classes.currency}> $</span>
                  <span style={{ color: "#23ef91" }}>9</span>
                  <span class={classes.decimals}>99</span>
                  <span class={classes.priceInfo}>$15.00</span>
                </span>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.productInfo}>
                <Typography variant="h5">- 22cm</Typography>
                <Typography variant="h5">- Free Delivery</Typography>
                <Typography variant="h5">- Discount Coupon</Typography>
              </div>
            </Grid>
          </Grid>
          <Button
            className={classes.cart}
            variant="contained"
            style={{ fontSize: "1rem" }}
            onClick={() => {
              order22 = {
                name: "Hawaiian",
                size: "22cm",
                price: 9.99,
                quantity: 1,
              };
              setOrders([...orders, order22]);
            }}
          >
            Order Now
          </Button>
        </div>
      </div>
    </>
  );
};
