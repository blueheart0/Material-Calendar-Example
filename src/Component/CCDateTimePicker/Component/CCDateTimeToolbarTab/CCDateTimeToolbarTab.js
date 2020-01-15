import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const useStyle = makeStyles(
  theme => ({
    root: {
      backgroundColor: theme.palette.secondary.main,
      width: 310
    }
  }),
  { name: "CCDateTimeToolbarTab" }
);
const CCDateTimeToolbarTab = props => {
  const { setOpenView, openView, timeIcon, dateRangeIcon } = props;
  const classes = useStyle();
  const [value, setValue] = useState(
    openView === "date" || openView === "hours" ? openView : "date"
  );
  useEffect(() => {
    setOpenView(value);
  }, [value, setOpenView]);
  return (
    <Grid container justify={"center"} className={clsx(classes.root)}>
      <Grid item>
        <Tabs
          value={value}
          onChange={(e, newValue) => {
            setValue(newValue);
          }}
          variant="standard"
          indicatorColor={"primary"}
          TabIndicatorProps={{
            style: {
              width: "50%"
            }
          }}
        >
          <Tab value={"date"} icon={dateRangeIcon} />
          <Tab value={"hours"} icon={timeIcon} />
        </Tabs>
      </Grid>
    </Grid>
  );
};
export default CCDateTimeToolbarTab;
