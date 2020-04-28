import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { useStyles, pizzaRed } from "../Styles/Styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Grid,
} from "@material-ui/core";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    background: `${pizzaRed}`,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export const NavBar = ({ openDrawer, setOpenDrawer, orders }) => {
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
          <IconButton
            aria-label="cart"
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <StyledBadge badgeContent={orders.length} color="secondary">
              <ShoppingCartIcon style={{ color: "#000" }} />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
