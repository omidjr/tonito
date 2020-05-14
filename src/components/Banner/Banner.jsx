import React from "react";
import { useStyles, pizzaRed } from "../Styles/Styles";
import { Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";

export const Banner = () => {
  const [loading, setLoading] = React.useState(true);
  const [loading2, setLoading2] = React.useState(true);
  const classes = useStyles();

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading2(false);
    }, 2500);
  }, []);

  return (
    <div className={classes.banner}>
      <div className={classes.bannerShadow} />
      {loading ? null : (
        <div className={classes.bannerHeader}>
          <Fade cascade>
            <Typography variant="h1">Tonito Pizzeria</Typography>
          </Fade>
        </div>
      )}
      {loading2 ? null : (
        <Fade cascade>
          <div className={classes.bannerHeader} style={{ marginTop: "120px" }}>
            <Typography variant="h4" style={{ lineHeight: "1.5" }}>
              Best pizza sets from EveryWhere
            </Typography>
          </div>
        </Fade>
      )}
    </div>
  );
};
