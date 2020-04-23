import React from "react";
import { useStyles } from "../Styles/Styles";
import { Typography } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";

export const FooterButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerBtn}>
      <Typography variant="h6">
        <RoomIcon /> Find us on Map
      </Typography>
    </div>
  );
};
