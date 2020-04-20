import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { FeatureImage, Label } from "../Styles/Styles";
import { useStyles } from "../Styles/Styles";

export const Features = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.features}>
        <Grid container spacing={1}>
          <Grid item xs={5} md={2}>
            <FeatureImage img={"img/other/delivery.jpg"}>
              <Label>
                <Typography variant="h4">Hot Delivery</Typography>
              </Label>
            </FeatureImage>
          </Grid>
          <Grid item xs={7} md={6}>
            <FeatureImage img={"img/other/best-ingredients.jpg"}>
              <Label>
                <Typography variant="h4">Best Ingredients</Typography>
              </Label>
            </FeatureImage>
          </Grid>
          <Grid item xs={12} md={4} wrap="wrap">
            <FeatureImage img={"img/other/coupon.jpg"}>
              <Label>
                <Typography variant="h3">Special Offers</Typography>
              </Label>
            </FeatureImage>
          </Grid>
          <Grid item xs={6} md={5}>
            <FeatureImage img={"img/other/chef.jpg"}>
              <Label>
                <Typography variant="h4">Best Italian Chefs</Typography>
              </Label>
            </FeatureImage>
          </Grid>
          <Grid item xs={6} md={7}>
            <FeatureImage img={"img/other/seasonal.jpg"}>
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
