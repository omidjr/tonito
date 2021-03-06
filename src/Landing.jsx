import React from "react";
import { responsiveFontSizes, MuiThemeProvider } from "@material-ui/core";
import { theme } from "./components/Styles/Styles";
import { SnackbarProvider } from "notistack";
import { NavBar } from "./components/NavBar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { Features } from "./components/Features/Features";
import { Menu } from "./components/Menu/Menu";
import { SpecialOffer } from "./components/SpecialOffer/SpecialOffer";
import { Tiles } from "./components/Tiles/Tiles";
import { MobileApp } from "./components/MobileApp/MobileApp";
import { Gallery } from "./components/Gallery/Gallery";
import { Footer } from "./components/Footer/Footer";
import { useOpenDrawer } from "./components/Hook/useOpenDrawer";
import { Order } from "./components/Order/Order";
import { Loading } from "./components/Loading/Loading";
import { ContactUs } from "./components/ContactUs/ContactUs";

const newTheme = responsiveFontSizes(theme);

export const Landing = ({ orders, setOrders, setStep, setTotalPrice }) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const openDrawer = useOpenDrawer();

  return (
    <>
      {loading ? (
        <MuiThemeProvider theme={newTheme}>
          <Loading />
        </MuiThemeProvider>
      ) : (
        <MuiThemeProvider theme={newTheme}>
          <NavBar {...openDrawer} orders={orders} />
          <SnackbarProvider maxSnack={3} autoHideDuration="2700">
            <Order
              {...openDrawer}
              orders={orders}
              setOrders={setOrders}
              setStep={setStep}
              setTotalPrice={setTotalPrice}
            />
          </SnackbarProvider>
          <Banner />
          <Features />
          <Menu orders={orders} setOrders={setOrders} />
          <SpecialOffer orders={orders} setOrders={setOrders} />
          <Tiles />
          <MobileApp />
          <ContactUs />
          <Gallery />
          <Footer />
        </MuiThemeProvider>
      )}
    </>
  );
};
