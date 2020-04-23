import React from "react";
import { useStyles } from "../Styles/Styles";
import { FooterSocialMedia } from "./FooterSocialMedia";
import { FooterLogo } from "./FooterLogo";
import { FooterAddress } from "./FooterAddress";
import { FooterCopyRight } from "./FooterCopyRight";
import { FooterButton } from "./FooterButton";

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <FooterSocialMedia />
        <FooterLogo />
        <FooterAddress />
        <FooterCopyRight />
        <FooterButton />
      </div>
    </div>
  );
};
