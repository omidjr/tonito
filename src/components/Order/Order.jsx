import React from "react";
import { Typography, Grid } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { formatPrice } from "../Data/FoodData";
import {
  OrderStyled,
  OrderContent,
  useStyles,
  pizzaRed,
} from "../Styles/Styles";

export const Order = ({ openDrawer, orders, setOrders }) => {
  const classes = useStyles();

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return openDrawer ? (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent emptyCart>
          <div>
            <img src="/img/other/cart-empty.png" alt="empty cart" />
            <span>Your cart is empty!</span>
          </div>
        </OrderContent>
      ) : (
        orders.map((order, index) => (
          <div className={classes.orderContainer}>
            <div
              style={{
                width: "100%",
                marginBottom: "10px",
                borderBottom: "1px solid #000",
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    style={{ color: `${pizzaRed}`, paddingBottom: "20px" }}
                  >
                    {order.name}
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="h6">Quantity:</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6">{order.size}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6">
                    {formatPrice(order.price)}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <DeleteForeverIcon
                    style={{
                      color: `${pizzaRed}`,
                      cursor: "pointer",
                      marginBottom: "20px",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // console.log(order.quantity);
                      deleteItem(index);
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        ))
      )}
    </OrderStyled>
  ) : (
    <div />
  );
};