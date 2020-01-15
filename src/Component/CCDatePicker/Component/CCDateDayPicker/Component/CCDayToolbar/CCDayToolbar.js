import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import React from "react";

const useStyle = makeStyles(
  theme => ({
    root: {
      backgroundColor: theme.palette.secondary.main,
      width: 310,
      height: 100,
      padding: "0 24px"
    },
    toolbarButton: {
      width: "100%",
      minWidth: "20%",
      padding: "0 2px",
      fontWeight: "Bold",
      fontSize: "20px",
      color: theme.palette.common.white
    },
    yearButton: {
      width: "100%",
      minWidth: "20%",
      padding: "0 2px",
      fontWeight: "normal",
      fontSize: "14px",
      color: theme.palette.common.white
    }
  }),
  { name: "CCDayToolbar" }
);
const CCDayToolbar = props => {
  const { date, setOpenView } = props;
  const classes = useStyle();
  return (
    <Grid
      className={clsx(classes.root)}
      container
      direction={"column"}
      justify={"center"}
      alignItems={"flex-start"}
    >
      <Grid item>
        <Button
          className={clsx(classes.yearButton)}
          onClick={() => {
            setOpenView("year");
          }}
        >
          {date ? date.format("YYYY") : "Selected Date"}
        </Button>
      </Grid>
      <Grid item>
        <Button
          className={clsx(classes.toolbarButton)}
          onClick={() => {
            setOpenView("date");
          }}
        >
          {date ? date.format("ddd,MMM D") : "Selected Date"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default CCDayToolbar;
