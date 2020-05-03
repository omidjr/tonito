import React from "react";
import { useStyles } from "../Styles/Styles";
import { Grid, Typography, TextField } from "@material-ui/core";

export const MobileApp = () => {
  const classes = useStyles();

  return (
    <div className={classes.mbApp}>
      <div className={classes.features}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <div
              style={{
                marginTop: "170px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid container>
                <Grid
                  item
                  xs={12}
                  style={{ margin: "0 auto", textAlign: "center" }}
                >
                  <Typography variant="h3" style={{ marginBottom: "20px" }}>
                    Tonito Mobile Application
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ margin: "0 auto", textAlign: "center" }}
                >
                  <Typography variant="h6" style={{ marginBottom: "60px" }}>
                    Enter your number and we'll text you download link on your
                    cell phone.
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ margin: "0 auto", textAlign: "center" }}
                >
                  <form style={{ marginBottom: "30px" }}>
                    <input
                      className={classes.linkInput}
                      type="text"
                      placeholder="ex: 0914xxxxxxx"
                    />
                    <input
                      className={classes.linkButton}
                      type="submit"
                      value="Send Link"
                    />
                  </form>
                </Grid>
                <Grid
                  container
                  spacing={1}
                  style={{
                    maxWidth: "360px",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <Grid item xs={6}>
                    <div className={classes.appLink}>
                      <img
                        src="/img/other/label-app-ios-direct-en.png"
                        alt="ios-direct"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className={classes.appLink}>
                      <img
                        src="/img/other/label-app-android-direct-en.png"
                        alt="android-direct"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className={classes.appLink}>
                      <img
                        src="/img/other/label-app-android-en.png"
                        alt="googleplay"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className={classes.appLink}>
                      <img
                        src="/img/other/label-app-android-bazaar-en.png"
                        alt="bazaar"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item md={5} style={{ margin: "0 auto", textAlign: "center" }}>
            <img
              src="/img/other/fig-iphone.png"
              alt="fig-iphone"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
