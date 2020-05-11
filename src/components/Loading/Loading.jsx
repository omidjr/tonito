import React from "react";
import ReactLoading from "react-loading";
import { Typography } from "@material-ui/core";

export const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" style={{ color: "#ef4123" }}>
        Tonito
      </Typography>
      <ReactLoading color="#ef4123" />
    </div>
  );
};
