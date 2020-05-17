import { createMuiTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styled from "styled-components";

export const pizzaRed = "#ef4123";
const bg = `linear-gradient(-60deg, ${pizzaRed}, #ef2379)`;

export const BannerContent = styled.div`
  z-index: 3;
  position: relative;
  & h1 {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 13rem;
  }
  & h1:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px #ef4123;
  }
  & h1:nth-child(2) {
    color: #ef4123;
    animation: animate 3s ease-in-out infinite;
  }
  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        15% 44%,
        32% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0% 60%,
        16% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
  @media screen and (min-width: 0px) and (max-width: 650px) {
    h1 {
      font-size: 6.5rem;
    }
  }
`;

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

export const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 55px;
  width: 25%;
  height: calc(100% - 72px);
  z-index: 999;
  padding-top: 15px;
  background-color: white;
  overflow: auto;
  overflow-x: hidden;
  border: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
  }
  @media (min-width: 500px) {
    width: 40%;
  }
  @media (min-width: 1025px) {
    width: 25%;
  }
`;

export const OrderContent = styled.div`
  overflow: auto;
  overflow-x: hidden;
  padding: 20px;
  height: 100%;
  ${({ emptyCart }) =>
    emptyCart
      ? `
  {
    & div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & img {
      max-width: 275px;
    }
    & span {
      color: #949494;
      text-align: center;
    }
  } 
  }`
      : ``}
`;

export const OrderMenuFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfirmButton = styled.div`
  margin: 10px;
  font-size: 20px;
  color: white;
  background: ${bg};
  border-radius: 5px;
  width: 250px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    background-color: grey;
    pointer-events: none;
  `}
`;

export const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
`;

export const QuantityInputStyled = styled.input`
  background: #e2e2e2;
  font-size: 20px;
  width: 50px;
  margin-top: 6px;
  text-align: center;
  border: none;
  outline: none;
`;

export const IncrementContainer = styled.div`
  display: flex;
`;

export const IncrementButton = styled.div`
  width: 23px;
  color: ${pizzaRed};
  font-size: 25px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin-top: 5px;
  border: 1px solid ${pizzaRed};
  ${({ disabled }) => disabled && `opacity: 0.5; pointer-events: none;`};
  &:hover {
    background-color: #ffe3e3;
  }
`;

export const MbAppImage = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 0px) and (max-width: 959px) {
    img {
      display: none;
    }
  }
`;

export const MbAppContent = styled.div`
  #mb-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 170px;
    margin-bottom: 85px;
  }

  @media screen and (min-width: 0px) and (max-width: 547px) {
    #mb-content {
      margin-top: 85px;
      margin-bottom: 85px;
    }
    input[type="text"] {
      font-size: 15px;
      width: 100%;
      height: 40px;
      padding: 0 25px;
      border-radius: 8px;
      margin-bottom: 10px;
    }
    input[type="submit"] {
      width: 100%;
      height: 40px;
      font-size: 20px;
      padding: 0 25px;
      border-radius: 8px;
    }
    }
  }
`;

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["Righteous"],
  },
});

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
    padding: "5px",
  },
  cart: {
    color: "#fff",
    background: `${bg}`,
  },
  banner: {
    height: "100vh",
    width: "100%",
    backgroundImage: 'url("img/other/showcase.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerShadow: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    background: "#000",
    zIndex: "1",
    opacity: "0.94",
  },
  bannerHeader: {
    position: "absolute",
    color: "#fff",
    zIndex: "2",
    width: "100%",
    textAlign: "center",
    "& span": {
      opacity: "0",
      transition: "all 0.5s ease",
      transform: "translateY(50px)",
      display: "inline-block",
    },
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
    backgroundColor: "#ececec",
    marginTop: "5px",
    borderRadius: "7px",
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
    transform: "translate(-50%, -50%)",
  },
  preTitle: {
    position: "relative",
    paddingTop: "20px",
  },
  productPrice: {
    fontFamily: ["Righteous"],
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
    background: `${bg}`,
    padding: "1.214em 2em",
    borderTopLeftRadius: "18px",
    borderTopRightRadius: "18px",
  },
  checkoutButton: {
    color: "#fff",
    background: `${bg}`,
    width: "250px",
    padding: "10px",
    margin: "10px",
  },
  mbApp: {
    marginTop: "100px",
    backgroundImage: `url(/img/other/bg.jpg)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "#3a3939",
    width: "100%",
  },
  linkInput: {
    position: "relative",
    display: "inline-block",
    fontSize: "20px",
    boxSizing: "border-box",
    textAlign: "center",
    backgroundColor: "#fff",
    width: "340px",
    height: "55px",
    border: "none",
    outline: "none",
    padding: "0 25px",
    borderRadius: "25px 0 0 25px",
  },
  linkButton: {
    position: "relative",
    display: "inline-block",
    bottom: "2px",
    fontSize: "14px",
    boxSizing: "border-box",
    fontFamily: ["Righteous"],
    background: `${bg}`,
    color: "#fff",
    width: "120px",
    height: "55px",
    border: "none",
    outline: "none",
    cursor: "pointer",
    borderRadius: "0 25px 25px 0",
  },
  appLink: {
    maxWidth: "250px",
    borderRadius: "10px",
    background: "#000",
    cursor: "pointer",
  },
});
