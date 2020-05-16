import React from "react";
import { useStyles, BannerContent } from "../Styles/Styles";
import { Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";

export const Banner = () => {
  const [loading, setLoading] = React.useState(true);
  const classes = useStyles();

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={classes.banner}>
      <div className={classes.bannerShadow} />
      {loading ? null : (
        <Fade cascade>
          <BannerContent>
            <Typography variant="h1">Tonito</Typography>
            <Typography variant="h1">Tonito</Typography>
          </BannerContent>
        </Fade>
      )}
    </div>
  );
};
