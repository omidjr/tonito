import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography, Grid, TextField, Button } from "@material-ui/core";
import { pizzaRed, bg } from "../Styles/Styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: `${pizzaRed}`,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: `${pizzaRed}`,
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: `${pizzaRed}`,
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3050ff",
      },
    },
  },
})(TextField);

export const BillingDetails = ({ setStep }) => {
  return (
    <>
      <Typography
        variant="h4"
        style={{
          marginBottom: "15px",
        }}
      >
        Billing Details
      </Typography>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CssTextField
              label="Full Name"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CssTextField
              label="Email Address"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CssTextField
              label="Phone"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CssTextField
              label="Country"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CssTextField
              label="City / Town"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CssTextField
              label="ZipCode"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              label="Address"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              style={{
                width: "100%",
                background: `${bg}`,
                color: "#fff",
                fontSize: "1rem",
                borderRadius: "1px 15px 15px 15px",
              }}
              onClick={() => setStep(1)}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
