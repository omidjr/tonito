import React from "react";
import { useStyles } from "../Styles/Styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

export const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Button className={classes.signUpButton} variant="outlined">
          Sign up
        </Button>
        <Typography className={classes.logo} variant="h3">
          Tonito
        </Typography>
        <Button className={classes.cart} variant="contained">
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};
