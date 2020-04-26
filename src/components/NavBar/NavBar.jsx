import React from "react";
import { useStyles } from "../Styles/Styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";

export const NavBar = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <Button className={classes.signUpButton} variant="outlined">
            Login
          </Button>
          <Grid xs={6} />
          <Typography className={classes.logo} variant="h3">
            Tonito
          </Typography>
          <Grid xs={6} />
          <Button
            onClick={() => setOpenDrawer(!openDrawer)}
            className={classes.cart}
            variant="contained"
          >
            <ShoppingCartIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
