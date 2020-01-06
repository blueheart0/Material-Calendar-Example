import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import PickerToolbar from "@material-ui/pickers/_shared/PickerToolbar";
import ToolbarButton from "@material-ui/pickers/_shared/ToolbarButton";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

const useStyle = makeStyles(
  theme => ({
    root: {
      backgroundColor: theme.palette.secondary.main
    },
    typography: {
      color: theme.palette.common.white
    },
    toolbarButton: {
      minWidth: "20%",
      minHeight: "30px",
      padding: " 2px",
      "& .MuiPickersToolbarText-toolbarTxt": {
        fontWeight: "Bold",
        fontSize: "20px"
      }
    }
  }),
  { name: "CCBetweenToolbar" }
);
const CCBetweenToolbar = props => {
  const { isLandscape, range, selecting } = props;
  const classes = useStyle();
  return (
    <PickerToolbar
      className={clsx(classes.root)}
      isLandscape={isLandscape || false}
    >
      <Grid container direction={"row"} justify={"space-around"}>
        <Grid item>
          <ToolbarButton
            classes={""}
            className={clsx(classes.toolbarButton)}
            label={
              selecting && selecting[0]
                ? selecting[0].format("ll")
                : range && range[0]
                ? range[0].format("ll")
                : "Start"
            }
            selected={true}
            size={"normal"}
            disabled
          />
        </Grid>
        <Grid item>
          <ToolbarButton
            classes={""}
            className={clsx(classes.toolbarButton)}
            label={"~"}
            disabled
            selected={true}
          />
        </Grid>
        <Grid item>
          <ToolbarButton
            classes={""}
            className={clsx(classes.toolbarButton)}
            label={
              selecting && selecting[1]
                ? selecting[1].format("ll")
                : range && range[1]
                ? range[1].format("ll")
                : "End"
            }
            selected={true}
            size={"normal"}
            disabled
          />
        </Grid>
      </Grid>
    </PickerToolbar>
  );
};
CCBetweenToolbar.propTypes = {
  range: PropTypes.arrayOf(PropTypes.object),
  selecting: PropTypes.arrayOf(PropTypes.object)
};
export default CCBetweenToolbar;
