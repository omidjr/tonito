import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "../Styles/Styles";
import { findByLabelText } from "@testing-library/react";

export const Tiles = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.features}
      style={{ marginTop: "80px", marginBottom: "80px" }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ margin: "0 auto" }}>
              <img src="img/other/taste.png" alt="taste" />
            </div>
            <div style={{ margin: "0 auto", textAlign: "center" }}>
              <Typography variant="h4">Taste Food</Typography>
              <Typography variant="subtitle1">
                Praesent pulvinar neque pellentesque mattis pretium.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ margin: "0 auto" }}>
              <img src="img/other/chef.png" alt="taste" />
            </div>
            <div style={{ margin: "0 auto", textAlign: "center" }}>
              <Typography variant="h4">Master Chefs</Typography>
              <Typography variant="subtitle1">
                Praesent pulvinar neque pellentesque mattis pretium.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ margin: "0 auto" }}>
              <img src="img/other/quality.png" alt="taste" />
            </div>
            <div style={{ margin: "0 auto", textAlign: "center" }}>
              <Typography variant="h4">Best Quality</Typography>
              <Typography variant="subtitle1">
                Praesent pulvinar neque pellentesque mattis pretium.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ margin: "0 auto" }}>
              <img src="img/other/time.png" alt="taste" />
            </div>
            <div style={{ margin: "0 auto", textAlign: "center" }}>
              <Typography variant="h4">On Time</Typography>
              <Typography variant="subtitle1">
                Praesent pulvinar neque pellentesque mattis pretium.
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
