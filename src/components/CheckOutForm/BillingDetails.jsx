import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography, Grid, TextField } from "@material-ui/core";
import { useStyles, MbAppContent, pizzaRed } from "../Styles/Styles";

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

export const BillingDetails = () => {
  const classes = useStyles();

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
          <Grid item xs={12} style={{ margin: "0 auto", textAlign: "center" }}>
            <MbAppContent>
              <form style={{ marginBottom: "30px", marginTop: "30px" }}>
                <input
                  className={classes.linkInput}
                  type="text"
                  placeholder="Coupon Code"
                />
                <input
                  className={classes.linkButton}
                  type="submit"
                  value="Apply Coupon"
                  onClick={(e) => e.preventDefault()}
                  style={{ background: "#333E48" }}
                />
              </form>
            </MbAppContent>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
