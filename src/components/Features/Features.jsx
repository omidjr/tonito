import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { FeatureImage, Label } from "../Styles/Styles";

export const Features = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={0} md={1} />
        <Grid item xs={5} md={2}>
          <FeatureImage img={"img/other/delivery.jpg"}>
            <Label>
              <Typography variant="h4">Hot Delivery</Typography>
            </Label>
          </FeatureImage>
        </Grid>
        <Grid item xs={6} md={5}>
          <FeatureImage img={"img/other/best-ingredients.jpg"}>
            <Label>
              <Typography variant="h4">Best Ingredients</Typography>
            </Label>
          </FeatureImage>
        </Grid>
        <Grid item xs={12} md={3}>
          <FeatureImage img={"img/other/coupon.jpg"}>
            <Label>
              <Typography variant="h3">Special Offers</Typography>
            </Label>
          </FeatureImage>
        </Grid>
        <Grid item xs={0} md={1} />
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={1} />
        <Grid item xs={6} md={5}>
          <FeatureImage img={"img/other/chef.jpeg"}>
            <Label style={{ marginTop: "180px" }}>
              <Typography variant="h4">Best Italian Chefs</Typography>
            </Label>
          </FeatureImage>
        </Grid>
        <Grid item xs={5} md={5}>
          <FeatureImage img={"img/other/seasonal.jpg"}>
            <Label style={{ marginTop: "180px" }}>
              <Typography variant="h4">Seasonal Material</Typography>
            </Label>
          </FeatureImage>
        </Grid>
        <Grid item md={1} />
      </Grid>
    </>
  );
};
