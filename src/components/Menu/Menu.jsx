import React from "react";
import { PizzaSets } from "./PizzaSets";
import { Sides } from "./Sides";
import { Drinks } from "./Drinks";
import { useStyles } from "../Styles/Styles";
import { Paper, Tabs, Tab, Typography } from "@material-ui/core";

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

export const Menu = ({ orders, setOrders }) => {
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
      <div style={{ height: "25px" }} />
      <TabPanel value={value} index={0}>
        <PizzaSets orders={orders} setOrders={setOrders} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Sides orders={orders} setOrders={setOrders} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Drinks orders={orders} setOrders={setOrders} />
      </TabPanel>
    </div>
  );
};
