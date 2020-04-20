import { createMuiTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styled from "styled-components";

export const FeatureImage = styled.div`
  min-height: 250px;
  border-radius: 7px;
  ${({ img }) =>
    img
      ? `background-image: url(${img});`
      : `background-image: url("/img/banner.jpg");`}
  background-position: center;
  background-size: cover;
  filter: contrast(85%);
`;

export const Label = styled.div`
  position: absolute;
  font-size: 25px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
  padding-left: 10px;
  border-radius: 7px;
  // margin-top: 50px;
`;

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["Righteous"],
  },
});

export const pizzaRed = "#ef4123";

export const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#f8f8f8",
  },
  logo: {
    color: `${pizzaRed}`,
    cursor: "pointer",
  },
  signUpButton: {
    color: `${pizzaRed}`,
    border: `1px solid ${pizzaRed}`,
  },
  cart: {
    color: "#fff",
    background: `linear-gradient(-60deg, ${pizzaRed}, #ef2379)`,
  },
  banner: {
    height: "50vh",
    marginTop: "58px",
    width: "100%",
    marginBottom: "60px",
    backgroundImage: 'url("img/other/banner.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    filter: "contrast(75%)",
  },
  features: {
    marginRight: "8%",
    marginLeft: "8%",
  },
  tabs: {
    flexGrow: 1,
    background: `linear-gradient(to right, #EB3349 0%, #F45C43 51%, #EB3349 100%)`,
    color: "#fff",
    marginTop: "50px",
    "& button": {
      fontSize: "25px",
    },
  },
  indicator: {
    backgroundColor: "#FFF",
    padding: "1px",
    borderRadius: "1px",
  },
  menu: {
    marginTop: "5px",
    transitionProperty: "box-shadow margin-top",
    transitionDuration: "0.2s",
    boxShadow: "0px 0px 2px 0px grey",
    borderRadius: "7px",
    "&:hover": {
      cursor: "pointer",
      marginTop: "0px",
      marginBottom: "5px",
      boxShadow: "0px 5px 10px 0px grey",
    },
  },
});
