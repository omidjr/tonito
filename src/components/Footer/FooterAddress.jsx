import React from "react";
import { useStyles } from "../Styles/Styles";
import { Grid, Typography } from "@material-ui/core";

export const FooterAddress = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerAddress}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={2}
          style={{ margin: "0 auto", textAlign: "center" }}
        >
          <Typography variant="subtitle1">Tonito Pizzeria</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          style={{ margin: "0 auto", textAlign: "center" }}
        >
          <Typography variant="subtitle1">
            901-947 South Drive, NewYork, NY 77057, USA
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="subtitle1"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Telephone: +1 555 1234
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography
            variant="subtitle1"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Fax: +1 555 4444
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
