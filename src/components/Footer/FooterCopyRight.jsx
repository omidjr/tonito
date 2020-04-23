import React from "react";
import { Typography } from "@material-ui/core";

export const FooterCopyRight = () => {
  return (
    <div style={{ marginBottom: "60px" }}>
      <Typography
        variant="subtitle1"
        style={{ margin: "0 auto", textAlign: "center" }}
      >
        Copyright &copy; 2020 Tonito Pizzeria. All rights reserved.
      </Typography>
    </div>
  );
};
