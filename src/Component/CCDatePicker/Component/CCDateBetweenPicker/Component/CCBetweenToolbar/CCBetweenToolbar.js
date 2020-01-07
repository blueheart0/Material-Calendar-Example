import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

const useStyle = makeStyles(
  theme => ({
    root: {
      backgroundColor: theme.palette.secondary.main,
      width: 310,
      height: 100
    },
    typography: {
      color: theme.palette.common.white
    },
    toolbarButton: {
      width: "100%",
      minWidth: "20%",
      minHeight: "30px",
      padding: " 2px",
      fontSize: "20px",
      color: theme.palette.common.white
    }
  }),
  { name: "CCBetweenToolbar" }
);
const CCBetweenToolbar = props => {
  const { range, selecting } = props;
  const classes = useStyle();
  const momentDisplayFormat = "MMM D, YYYY";
  return (
    <Grid
      className={clsx(classes.root)}
      container
      direction={"row"}
      justify={"space-around"}
      alignItems={"center"}
    >
      <Grid item>
        <Button className={clsx(classes.toolbarButton)}>
          {selecting && selecting[0]
            ? selecting[0].format(momentDisplayFormat)
            : range && range[0]
            ? range[0].format(momentDisplayFormat)
            : "Start"}
        </Button>
      </Grid>
      <Grid item>
        <Button className={clsx(classes.toolbarButton)}>{"~"}</Button>
      </Grid>
      <Grid item>
        <Button className={clsx(classes.toolbarButton)}>
          {selecting && selecting[1]
            ? selecting[1].format(momentDisplayFormat)
            : range && range[1]
            ? range[1].format(momentDisplayFormat)
            : "End"}
        </Button>
      </Grid>
    </Grid>
  );
};
CCBetweenToolbar.propTypes = {
  range: PropTypes.arrayOf(PropTypes.object),
  selecting: PropTypes.arrayOf(PropTypes.object)
};
export default CCBetweenToolbar;
