import React from "react";
import { Grid } from "@material-ui/core";
import { FeatureImage } from "../Styles/Styles";

export const Gallery = () => {
  return (
    <Grid container>
      <Grid item xs={4} md={2}>
        <FeatureImage
          img={"img/gallery/gp-1.jpg"}
          style={{ borderRadius: "0px" }}
        />
      </Grid>
      <Grid item xs={4} md={2}>
        <FeatureImage
          img={"img/gallery/gp-2.jpg"}
          style={{ borderRadius: "0px" }}
        />
      </Grid>
      <Grid item xs={4} md={2}>
        <FeatureImage
          img={"img/gallery/gp-3.jpg"}
          style={{ borderRadius: "0px" }}
        />
      </Grid>
      <Grid item xs={4} md={2}>
        <FeatureImage
          img={"img/gallery/gp-4.jpg"}
          style={{ borderRadius: "0px" }}
        />
      </Grid>
      <Grid item xs={4} md={2}>
        <FeatureImage
          img={"img/gallery/gp-5.jpg"}
          style={{ borderRadius: "0px" }}
        />
      </Grid>
      <Grid item xs={4} md={2}>
        <FeatureImage
          img={"img/gallery/gp-6.jpg"}
          style={{ borderRadius: "0px" }}
        />
      </Grid>
    </Grid>
  );
};
