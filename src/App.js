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

const newTheme = responsiveFontSizes(theme);

function App() {
  return (
    <>
      <MuiThemeProvider theme={newTheme}>
        <NavBar />
        <Banner />
        <Features />
        <Menu />
        <SpecialOffer />
        <Tiles />
        <Gallery />
        <Footer />
      </MuiThemeProvider>
    </>
  );
}

export default App;
