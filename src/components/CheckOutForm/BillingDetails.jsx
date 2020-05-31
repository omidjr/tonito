import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography, Grid, TextField } from "@material-ui/core";
import { useStyles, MbAppContent, pizzaRed, bg } from "../Styles/Styles";

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

export const BillingDetails = ({ userInfo, setUserInfo, initialState }) => {
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
              required="true"
              value={userInfo.name}
              onChange={(e) => {
                setUserInfo({ ...userInfo, name: e.target.value });
              }}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CssTextField
              label="Email Address"
              variant="outlined"
              required="true"
              value={userInfo.email}
              onChange={(e) => {
                setUserInfo({ ...userInfo, email: e.target.value });
              }}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CssTextField
              label="Phone"
              variant="outlined"
              required="true"
              value={userInfo.phone}
              onChange={(e) => {
                setUserInfo({ ...userInfo, phone: e.target.value });
              }}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CssTextField
              label="Country"
              variant="outlined"
              required="true"
              value={userInfo.country}
              onChange={(e) => {
                setUserInfo({ ...userInfo, country: e.target.value });
              }}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CssTextField
              label="City / Town"
              variant="outlined"
              required="true"
              value={userInfo.city}
              onChange={(e) => {
                setUserInfo({ ...userInfo, city: e.target.value });
              }}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CssTextField
              label="ZipCode"
              variant="outlined"
              required="true"
              value={userInfo.zipCode}
              onChange={(e) => {
                setUserInfo({ ...userInfo, zipCode: e.target.value });
              }}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              label="Address"
              variant="outlined"
              required="true"
              value={userInfo.address}
              onChange={(e) => {
                setUserInfo({ ...userInfo, address: e.target.value });
              }}
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
                  style={{ border: "1px solid #ccc" }}
                />
                <input
                  className={classes.linkButton}
                  type="submit"
                  value="Apply Coupon"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    background: `${bg}`,
                    color: "#000",
                    filter: "invert(1)",
                  }}
                />
              </form>
            </MbAppContent>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
