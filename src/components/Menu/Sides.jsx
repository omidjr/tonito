import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useStyles, FeatureImage } from "../Styles/Styles";
import { FoodData, formatPrice } from "../Data/FoodData";

export const Sides = () => {
  const [loading, setLoading] = React.useState(true);
  const classes = useStyles();

  React.useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <Grid container spacing={3}>
      {FoodData.map((food) =>
        food.item === "Sides" ? (
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.menu}>
              {loading && food.img ? (
                <FeatureImage img={food.img} />
              ) : (
                <Skeleton
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                  variant="rect"
                  height={250}
                />
              )}
              {loading && food.img ? (
                <Typography variant="h4" className={classes.menuLabel}>
                  {food.name}
                </Typography>
              ) : (
                <Skeleton
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    margin: "30px 10% 0px 10%",
                    padding: "8px 0px",
                  }}
                />
              )}
              {loading && food.img ? (
                <>
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
                        style={{ fontSize: "1rem" }}
                      >
                        Single
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
                        style={{ fontSize: "1rem" }}
                      >
                        Family
                      </Button>
                      <Typography
                        style={{ padding: "5px 0px 0px 25%" }}
                        variant="subtitle1"
                      >
                        {formatPrice(food.price2)}
                      </Typography>
                    </div>
                  </div>
                </>
              ) : (
                <Skeleton
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    margin: "5px 10% 0px 10%",
                    padding: "60px 0px",
                  }}
                />
              )}
            </div>
          </Grid>
        ) : null
      )}
    </Grid>
  );
};
