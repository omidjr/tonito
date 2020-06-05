import React from "react";
import { Typography, Button } from "@material-ui/core";
import { useStyles } from "../Styles/Styles";

export const EmailConfirmation = ({ setStep, setOrders }) => {
  const classes = useStyles();

  return (
    <div className={classes.email}>
      <div className={classes.emailContainer}>
        <div className={classes.emailShadow} />
        <div
          className={classes.features}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            zIndex: "2",
          }}
        >
          <Typography variant="h2" style={{ margin: "-80px 0px 40px 0px" }}>
            Thank you for choosing Tonito
          </Typography>
          <Typography variant="h4" style={{ marginBottom: "20px" }}>
            Please check your email for receipt
          </Typography>
          <div style={{ width: "150px", marginBottom: "20px" }}>
            <img
              src="/img/other/email-confirm.gif"
              alt="email"
              style={{ width: "100%" }}
            />
          </div>
          <Button
            style={{
              background: "#0072FF",
              color: "#fff",
              marginBottom: "-10%",
              marginTop: "30px",
              borderRadius: "1px 15px 1px 15px",
              fontSize: "1.5rem",
              textTransform: "capitalize",
            }}
            onClick={() => {
              setStep(1);
              setOrders([]);
            }}
          >
            Still hungry ?!
          </Button>
        </div>
      </div>
    </div>
  );
};
