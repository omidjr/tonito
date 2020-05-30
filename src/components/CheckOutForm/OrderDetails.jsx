import React from "react";
import {
  Typography,
  Grid,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";
import { bg } from "../Styles/Styles";
import { formatPrice } from "../Data/FoodData";

const deliveryPrice = 9.99;
const discount = 4.99;

export const OrderDetails = ({ setStep, totalPrice }) => {
  const [value, setValue] = React.useState("Direct Bank Transfer");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Typography variant="subtitle1">Total Price</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1">{formatPrice(totalPrice)}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle1">Delivery Price</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1">
            {formatPrice(deliveryPrice)}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle1">Discount</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1">{formatPrice(discount)}</Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={{ width: "100%", borderBottom: "2px solid" }} />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle1">Total</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1">
            {formatPrice(totalPrice + deliveryPrice - discount)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Direct Bank Transfer"
                control={<Radio />}
                label="Direct Bank Transfer"
              />
              <Typography
                variant="subtitle1"
                style={{ color: "#676767", marginLeft: "31px" }}
              >
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order won’t be
                shipped until the funds have cleared in our account.
              </Typography>
              <FormControlLabel
                value="Check Payments"
                control={<Radio />}
                label="Check Payments"
              />
              <FormControlLabel
                value="Cash on Delivery"
                control={<Radio />}
                label="Cash on Delivery"
              />
              <Grid container>
                <Grid item xs={9}>
                  <FormControlLabel
                    value="PayPal"
                    control={<Radio />}
                    label="PayPal"
                  />
                </Grid>
                <Grid item xs={3}>
                  <img
                    src="/img/other/paypal.jpg"
                    alt="paypal"
                    style={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <Button
            style={{
              width: "100%",
              background: `${bg}`,
              color: "#fff",
              fontSize: "1rem",
              borderRadius: "30px",
            }}
          >
            Place Order
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            style={{
              width: "100%",
              background: `${bg}`,
              color: "#fff",
              fontSize: "1rem",
              borderRadius: "30px",
            }}
            onClick={() => setStep(1)}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
