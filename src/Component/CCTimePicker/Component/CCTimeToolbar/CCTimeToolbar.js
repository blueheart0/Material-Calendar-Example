import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { MuiPickersContext } from "@material-ui/pickers";
import clsx from "clsx";
import React, { useContext } from "react";

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
      fontSize: "30px",
      color: theme.palette.common.white
    },
    meridiemButton: {
      width: "100%",
      minWidth: "20%",
      height: "35px",
      padding: "0 2px",
      fontWeight: "Bold",
      fontSize: "25px",
      color: theme.palette.common.white
    },

    selected: {
      color: theme.palette.primary.main
    },

    "@keyframes blink": {
      "0%": { opacity: 0 },
      "50%": { opacity: 0.5 },
      "100%": { opacity: 1 }
    },
    timeColon: {
      animation: "$blink .8s linear infinite"
    },
    marginRight: {
      marginRight: 10
    }
  }),
  { name: "CCTimeToolbar" }
);
const CCTimeToolbar = props => {
  const { date, onChange, setOpenView } = props;
  const pickerContext = useContext(MuiPickersContext);
  const classes = useStyle();
  return (
    <Grid
      className={clsx(classes.root)}
      container
      direction={"row"}
      justify={"center"}
      alignItems={"center"}
    >
      <Grid item className={clsx(classes.marginRight)}>
        <Grid container direction={"column"}>
          <Button
            className={clsx(classes.meridiemButton, {
              [classes.selected]: date.format("A") === "AM"
            })}
            onClick={() => {
              onChange(
                pickerContext.mergeDateAndTime(
                  date,
                  date.clone().add(12, "hours")
                )
              );
            }}
          >
            {"AM"}
          </Button>
          <Button
            className={clsx(classes.meridiemButton, {
              [classes.selected]: date.format("A") === "PM"
            })}
            onClick={() => {
              onChange(
                pickerContext.mergeDateAndTime(
                  date,
                  date.clone().add(12, "hours")
                )
              );
            }}
          >
            {"PM"}
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          className={clsx(classes.toolbarButton)}
          onClick={() => {
            setOpenView("hours");
          }}
        >
          {date ? date.format("hh") : "Selected Date"}
        </Button>
      </Grid>
      <Grid item>
        <Button className={clsx(classes.toolbarButton, classes.timeColon)}>
          {":"}
        </Button>
      </Grid>
      <Grid item>
        <Button
          className={clsx(classes.toolbarButton)}
          onClick={() => {
            setOpenView("minutes");
          }}
        >
          {date ? date.format("mm") : "Selected Date"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default CCTimeToolbar;
