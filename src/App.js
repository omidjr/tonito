import React from "react";
import { responsiveFontSizes, MuiThemeProvider } from "@material-ui/core";
import { theme } from "./components/Styles/Styles";
import { NavBar } from "./components/NavBar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { Features } from "./components/Features/Features";
import { Menu } from "./components/Menu/Menu";
import { SpecialOffer } from "./components/SpecialOffer/SpecialOffer";
import { Tiles } from "./components/Tiles/Tiles";
import { Gallery } from "./components/Gallery/Gallery";
import { Footer } from "./components/Footer/Footer";
import { useOpenDrawer } from "./components/Hook/useOpenDrawer";
import { Order } from "./components/Order/Order";
import { useOrders } from "./components/Hook/useOrders";

const newTheme = responsiveFontSizes(theme);

function App() {
  const openDrawer = useOpenDrawer();
  const orders = useOrders();

  return (
    <>
      <MuiThemeProvider theme={newTheme}>
        <NavBar {...openDrawer} />
        <Order {...openDrawer} {...orders} />
        <Banner />
        <Features />
        <Menu {...orders} />
        <SpecialOffer {...orders} />
        <Tiles />
        <Gallery />
        <Footer />
      </MuiThemeProvider>
    </>
  );
}

export default App;
