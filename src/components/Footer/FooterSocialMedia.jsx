import React from "react";
import { useStyles } from "../Styles/Styles";
import { Tooltip, Zoom } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";

export const FooterSocialMedia = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerSocial}>
      <Tooltip title="Facebook" TransitionComponent={Zoom} arrow>
        <FacebookIcon
          style={{
            fontSize: "1.776rem",
            padding: "0px 10px 0px 0px",
            cursor: "pointer",
          }}
        />
      </Tooltip>
      <Tooltip title="Twitter" TransitionComponent={Zoom} arrow>
        <TwitterIcon
          style={{
            fontSize: "1.776rem",
            padding: "0px 10px",
            cursor: "pointer",
          }}
        />
      </Tooltip>
      <Tooltip title="Instagram" TransitionComponent={Zoom} arrow>
        <InstagramIcon
          style={{
            fontSize: "1.776rem",
            padding: "0px 10px",
            cursor: "pointer",
          }}
        />
      </Tooltip>
      <Tooltip title="YouTube" TransitionComponent={Zoom} arrow>
        <YouTubeIcon
          style={{
            fontSize: "1.776rem",
            padding: "0px 10px",
            cursor: "pointer",
          }}
        />
      </Tooltip>
      <Tooltip title="Pinterest" TransitionComponent={Zoom} arrow>
        <PinterestIcon
          style={{
            fontSize: "1.9rem",
            padding: "0px 0px 0px 10px",
            cursor: "pointer",
          }}
        />
      </Tooltip>
    </div>
  );
};
