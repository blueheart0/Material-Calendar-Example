import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import moment from "moment";
import PropTypes from "prop-types";
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
  { name: "CCWeekToolbar" }
);
const CCWeekToolbar = props => {
  const { value, range, setOpenView } = props;
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
          {value.format("YYYY") + ", " + value.format("wo") + " Week"}
        </Button>
      </Grid>
      <Grid item>
        <Button
          className={clsx(classes.toolbarButton)}
          onClick={() => {
            setOpenView("date");
          }}
        >
          {range[0].format("MMM D") + " ~ " + range[1].format("MMM D")}
        </Button>
      </Grid>
    </Grid>
  );
};
CCWeekToolbar.CCDayToolbar = {
  value: PropTypes.instanceOf(moment).isRequired,
  range: PropTypes.arrayOf(PropTypes.instanceOf(moment)).isRequired
};

export default CCWeekToolbar;
