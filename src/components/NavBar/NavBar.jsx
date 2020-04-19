import React from "react";
import { useStyles } from "../Styles/Styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";

export const NavBar = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Grid item>
            <Button className={classes.signUpButton} variant="outlined">
              Login
            </Button>
          </Grid>
          <Grid xs={6} />
          <Grid item>
            <Typography className={classes.logo} variant="h3">
              Tonito
            </Typography>
          </Grid>
          <Grid xs={6} />
          <Grid item>
            <Button className={classes.cart} variant="contained">
              <ShoppingCartIcon />
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
