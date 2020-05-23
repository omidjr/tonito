import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
import { useStyles, FeatureImage, Label } from "../Styles/Styles";

export const Features = () => {
  const classes = useStyles();

  React.useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <div
        className={classes.features}
        style={{ marginTop: "20vh", marginBottom: "20vh" }}
      >
        <Grid container spacing={1}>
          <Grid item xs={5} md={2}>
            <FeatureImage
              img={"img/other/delivery.jpg"}
              data-aos="fade-right"
              data-aos-duration="950"
            >
              <Label>
                <Typography variant="h4">Hot Delivery</Typography>
              </Label>
            </FeatureImage>
          </Grid>
          <Grid item xs={7} md={6}>
            <FeatureImage
              img={"img/other/best-ingredients.jpg"}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Label>
                <Typography variant="h4">Best Ingredients</Typography>
              </Label>
            </FeatureImage>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureImage
              img={"img/other/coupon.jpg"}
              data-aos="zoom-in"
              data-aos-duration="1100"
            >
              <Label>
                <Typography variant="h3">Special Offers</Typography>
              </Label>
            </FeatureImage>
          </Grid>
          <Grid item xs={6} md={5}>
            <FeatureImage
              img={"img/other/chef.jpg"}
              data-aos="fade-up"
              data-aos-duration="1300"
            >
              <Label>
                <Typography variant="h4">Best Italian Chefs</Typography>
              </Label>
            </FeatureImage>
          </Grid>
          <Grid item xs={6} md={7}>
            <FeatureImage
              img={"img/other/seasonal.jpg"}
              data-aos="fade-left"
              data-aos-duration="1400"
            >
              <Label>
                <Typography variant="h4">Seasonal Material</Typography>
              </Label>
            </FeatureImage>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
