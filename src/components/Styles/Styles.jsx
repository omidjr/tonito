import { createMuiTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["Righteous"],
  },
});

const pizzaRed = "#ef4123";

export const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#f8f8f8",
  },
  logo: {
    color: `${pizzaRed}`,
    textAlign: "center",
    flex: "1",
  },
  signUpButton: {
    color: `${pizzaRed}`,
    border: `1px solid ${pizzaRed}`,
  },
  cart: {
    color: "#fff",
    background: `linear-gradient(-60deg, ${pizzaRed}, #ef2379)`,
  },
});
