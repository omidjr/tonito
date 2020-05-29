import React from "react";
import { responsiveFontSizes, MuiThemeProvider } from "@material-ui/core";
import { theme } from "./components/Styles/Styles";
import { Loading } from "./components/Loading/Loading";
import { CheckOutForm } from "./components/CheckOutForm/CheckOutForm";
import { Footer } from "./components/Footer/Footer";

const newTheme = responsiveFontSizes(theme);

export const CheckOut = ({ setStep }) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <MuiThemeProvider theme={newTheme}>
          <Loading />
        </MuiThemeProvider>
      ) : (
        <MuiThemeProvider theme={newTheme}>
          <CheckOutForm setStep={setStep} />
          <Footer />
        </MuiThemeProvider>
      )}
    </>
  );
};
