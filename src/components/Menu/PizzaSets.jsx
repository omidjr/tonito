import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { useStyles, FeatureImage } from "../Styles/Styles";
import { FoodData, formatPrice } from "../Data/FoodData";

export const PizzaSets = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {FoodData.map((food) =>
        food.item === "Pizza" ? (
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.menu}>
              <FeatureImage img={food.img} />
              <Typography variant="h4" className={classes.menuLabel}>
                {food.name}
              </Typography>
              <Typography
                variant="h6"
                className={classes.menuLabel}
                style={{ paddingTop: "25px" }}
              >
                Extra olive oil, garlic, mozzarella, mushrooms and olives.
              </Typography>
              <div className={classes.sizes}>
                <hr className={classes.bar} />
                <Typography variant="h6" style={{ padding: "0px 25px" }}>
                  Pick Size
                </Typography>
                <hr className={classes.bar} />
              </div>
              <div
                className={classes.sizes}
                style={{
                  padding: "10px 20px",
                  marginBottom: "0px",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    className={classes.cart}
                    variant="contained"
                    style={{ borderRadius: "10%", fontSize: "1rem" }}
                  >
                    22cm
                  </Button>
                  <Typography
                    style={{ padding: "5px 0px 0px 19%" }}
                    variant="subtitle1"
                  >
                    {formatPrice(food.price1)}
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    className={classes.cart}
                    variant="contained"
                    style={{ borderRadius: "10%", fontSize: "1rem" }}
                  >
                    29cm
                  </Button>
                  <Typography
                    style={{ padding: "5px 0px 0px 19%" }}
                    variant="subtitle1"
                  >
                    {formatPrice(food.price2)}
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        ) : null
      )}
    </Grid>
  );
};