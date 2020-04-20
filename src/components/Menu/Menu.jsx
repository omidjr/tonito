import React from "react";
import { FoodData } from "../Data/FoodData";
import { useStyles, FeatureImage } from "../Styles/Styles";
import { Paper, Tabs, Tab, Typography, Grid } from "@material-ui/core";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <> {children} </>}
    </Typography>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const Menu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.features}>
      <Paper className={classes.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          variant="fullWidth"
          classes={{ indicator: classes.indicator }}
        >
          <Tab label="Pizza" {...a11yProps(0)} />
          <Tab label="Sides" {...a11yProps(1)} />
          <Tab label="Drinks" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <div style={{ height: "50px" }} />
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          {FoodData.map((food) =>
            food.item === "Pizza" ? (
              <Grid item xs={12} sm={6} md={4}>
                <div className={classes.menu}>
                  <FeatureImage img={food.img} />
                </div>
              </Grid>
            ) : null
          )}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
          {FoodData.map((food) =>
            food.item === "Sides" ? (
              <Grid item xs={12} sm={6} md={4}>
                <div className={classes.menu}>
                  <FeatureImage img={food.img} />
                </div>
              </Grid>
            ) : null
          )}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={3}>
          {FoodData.map((food) =>
            food.item === "Drinks" ? (
              <Grid item xs={12} sm={6} md={4}>
                <div className={classes.menu}>
                  <FeatureImage img={food.img} />
                </div>
              </Grid>
            ) : null
          )}
        </Grid>
      </TabPanel>
    </div>
  );
};
