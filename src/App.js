import React from "react";
import { responsiveFontSizes, MuiThemeProvider } from "@material-ui/core";
import { theme } from "./components/Styles/Styles";
import { NavBar } from "./components/NavBar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { Features } from "./components/Features/Features";

const newTheme = responsiveFontSizes(theme);

function App() {
  return (
    <>
      <MuiThemeProvider theme={newTheme}>
        <NavBar />
        <Banner />
        <Features />
        <h1>Hello Tonito</h1>
      </MuiThemeProvider>
    </>
  );
}

export default App;
