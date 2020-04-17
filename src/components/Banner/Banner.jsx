import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "../Styles/Styles";

export const Banner = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <div className={classes.banner} />
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};
