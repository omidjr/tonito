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
    filter: "contrast(85%)",
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
    backgroundColor: "#e2e2e2",
    marginTop: "5px",
    transitionProperty: "box-shadow margin-top",
    transitionDuration: "0.2s",
    boxShadow: "0px 0px 2px 0px grey",
    borderRadius: "7px",
    "&:hover": {
      marginTop: "0px",
      marginBottom: "5px",
      boxShadow: "0px 5px 10px 0px grey",
    },
  },
  menuLabel: {
    paddingTop: "30px",
    textAlign: "center",
  },
  sizes: {
    marginRight: "8%",
    marginLeft: "8%",
    paddingTop: "25px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  bar: {
    flex: "auto",
    border: "none",
    height: "1px",
    background: "#504d4d",
  },
  special: {
    position: "relative",
    marginTop: "50px",
    width: "100%",
    height: "77vh",
  },
  specialImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: 'url("img/food/pizza/hawaiian-pizza.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    filter: "drop-shadow(15px 15px 15px gray) blur(3px) brightness(60%)",
  },
  specialText: {
    position: "absolute",
    color: "#fff",
    top: "50%",
    left: "50%",
    transform: "translate(-63%, -50%)",
  },
  preTitle: {
    position: "relative",
    paddingTop: "20px",
  },
  productPrice: {
    fontSize: "6.625em",
    color: "#fff",
    lineHeight: "0.6em",
    display: "flex",
  },
  price: {
    fontWeight: "bold",
    display: "block",
    textAlign: "right",
  },
  currency: {
    lineHeight: "1em",
    fontSize: "0.5em",
    verticalAlign: "top",
    fontWeight: "300",
  },
  decimals: {
    color: "#23ef91",
    lineHeight: "1em",
    fontSize: "0.5em",
    verticalAlign: "top",
  },
  priceInfo: {
    fontSize: "2rem",
    position: "relative",
    bottom: "-10px",
    right: "55px",
    textDecoration: "line-through",
  },
  productInfo: {
    paddingBottom: "25px",
  },
  footer: {
    backgroundColor: "#2C2C2C",
    color: "#fff",
    // height: "200px",
  },
  footerContainer: {
    marginRight: "15%",
    marginLeft: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  footerSocial: {
    paddingTop: "50px",
    "& svg:hover": {
      color: `${pizzaRed}`,
      transition: "ease-in-out .3s",
    },
  },
  footerAddress: {
    width: "100%",
    marginBottom: "50px",
  },
  footerBtn: {
    bottom: "0",
    color: "#fff",
    fontSize: "0.875em",
    background: `linear-gradient(-60deg, ${pizzaRed}, #ef2379)`,
    padding: "1.214em 2em",
    borderTopLeftRadius: "18px",
    borderTopRightRadius: "18px",
  },
});
