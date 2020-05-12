import React from "react";
import ReactLoading from "react-loading";
import { Typography } from "@material-ui/core";

export const Loading = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "url(/img/other/showcase2.jpg) no-repeat center / cover",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            height: "100vh",
            width: "100vw",
            position: "absolute",
            top: "0",
            left: "0",
            background: "#f92500",
            zIndex: "1",
            opacity: "0.77",
          }}
        />
        <div
          style={{
            zIndex: "2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h1" style={{ color: "#fff" }}>
            Tonito
          </Typography>
          <ReactLoading width="58px" height="58px" />
        </div>
      </div>
    </>
  );
};
