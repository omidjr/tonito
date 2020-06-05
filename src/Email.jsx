import React from "react";
import { responsiveFontSizes, MuiThemeProvider } from "@material-ui/core";
import { theme } from "./components/Styles/Styles";
import { EmailConfirmation } from "./components/EmailConfirmation/EmailConfirmation";

const newTheme = responsiveFontSizes(theme);

export const Email = ({ setStep, setOrders }) => {
  return (
    <MuiThemeProvider theme={newTheme}>
      <EmailConfirmation setStep={setStep} setOrders={setOrders} />
    </MuiThemeProvider>
  );
};
