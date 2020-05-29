import React from "react";
import { OrderPrice } from "./OrderPrice";
import { OrderFooter } from "./OrderFooter";
import { OrderFooterDisabled } from "./OrderFooterDisabled";
import { Motion, spring } from "react-motion";
import { Typography, Grid } from "@material-ui/core";
import { useSnackbar } from "notistack";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { formatPrice } from "../Data/FoodData";
import {
  OrderStyled,
  OrderContent,
  OrderContainer,
  IncrementContainer,
  IncrementButton,
  pizzaRed,
} from "../Styles/Styles";

export const Order = ({ openDrawer, orders, setOrders, setStep }) => {
  let [value, setValue] = React.useState(1);
  const { enqueueSnackbar } = useSnackbar();

  const getPrice = (order) => {
    return order.quantity * order.price;
  };

  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const tax = subtotal * 0.07;

  const total = subtotal + tax;

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  const handleClickVariant = (variant, order) => {
    enqueueSnackbar(`${order.name} was deleted`, { variant });
  };

  return (
    <Motion
      defaultStyle={{ x: 500 }}
      style={{
        x: spring(openDrawer ? 0 : 500),
      }}
    >
      {(style) => (
        <OrderStyled style={{ transform: `translateX(${style.x}px)` }}>
          {orders.length === 0 ? (
            <OrderContent emptyCart>
              <div>
                <img src="/img/other/cart-empty.png" alt="empty cart" />
                <span>Your cart is empty!</span>
              </div>
            </OrderContent>
          ) : (
            <OrderContent>
              {orders.map((order, index) => (
                <Motion
                  defaultStyle={{ x: 500 }}
                  style={{
                    x: spring(order ? 0 : 500),
                  }}
                >
                  {(style) => (
                    <OrderContainer
                      style={{ transform: `translateX(${style.x}px)` }}
                    >
                      <div>
                        <Grid container>
                          <Grid item xs={12}>
                            <Typography
                              variant="h5"
                              style={{
                                color: `${pizzaRed}`,
                                paddingBottom: "20px",
                              }}
                            >
                              {order.name}
                            </Typography>
                          </Grid>
                          <Grid item xs={5}>
                            <IncrementContainer>
                              <IncrementButton
                                onClick={() => {
                                  setValue((value -= 1));
                                  order.quantity -= 1;
                                }}
                                disabled={order.quantity === 1}
                              >
                                {" "}
                                -{" "}
                              </IncrementButton>
                              <Typography
                                variant="h6"
                                style={{ padding: "0px 18px" }}
                              >
                                {order.quantity}
                              </Typography>
                              <IncrementButton
                                onClick={() => {
                                  setValue((value += 1));
                                  order.quantity += 1;
                                }}
                              >
                                {" "}
                                +{" "}
                              </IncrementButton>
                            </IncrementContainer>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography variant="h6">{order.size}</Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography variant="h6">
                              {formatPrice(order.price * order.quantity)}
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
                                deleteItem(index);
                                handleClickVariant("info", order);
                              }}
                            />
                          </Grid>
                        </Grid>
                      </div>
                    </OrderContainer>
                  )}
                </Motion>
              ))}
              <OrderPrice subtotal={subtotal} tax={tax} total={total} />
            </OrderContent>
          )}
          {orders.length === 0 ? (
            <OrderFooterDisabled disabled />
          ) : (
            <OrderFooter orders={orders} total={total} setStep={setStep} />
          )}
        </OrderStyled>
      )}
    </Motion>
  );
};
