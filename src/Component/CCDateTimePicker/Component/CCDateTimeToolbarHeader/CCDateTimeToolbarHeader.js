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
    marginLeft: {
      marginLeft: 10
    },

    toolbarButton: {
      // width: "100%",
      padding: 0,
      ...theme.typography.h3,
      color: theme.palette.common.white,
      minWidth: 0,
      marginRight: 5
    },
    timeButton: {
      // width: "100%",
      padding: 0,
      ...theme.typography.h3,
      color: theme.palette.common.white,
      minWidth: 20
    },

    yearButton: {
      // width: "100%",
      padding: 0,
      ...theme.typography.body1,
      color: theme.palette.common.white,
      minWidth: 0
    },
    "@keyframes blink": {
      "0%": { opacity: 0 },
      "50%": { opacity: 0.5 },
      "100%": { opacity: 1 }
    },
    timeColon: {
      minWidth: 0,
      ...theme.typography.body1,
      color: theme.palette.common.white,
      animation: "$blink .8s linear infinite"
    },
    meridiemButton: {
      width: "100%",
      minWidth: "20%",
      height: "20px",
      padding: "0 2px",
      fontWeight: "Bold",
      fontSize: "15px",
      color: theme.palette.common.white
    },

    selected: {
      color: theme.palette.primary.main
    }
  }),
  { name: "CCDateTimeToolbar" }
);
const CCDateTimeToolbarHeader = props => {
  const { date, setOpenView, onChange } = props;
  const pickerContext = useContext(MuiPickersContext);
  const classes = useStyle();
  return (
    <Grid
      container
      className={clsx(classes.root)}
      direction={"column"}
      justify={"flex-end"}
      alignItems={"flex-start"}
    >
      <Grid item>
        <Button
          size={"small"}
          className={clsx(classes.yearButton)}
          onClick={() => {
            setOpenView("year");
          }}
        >
          {date ? date.format("YYYY") : "Selected Year"}
        </Button>
      </Grid>
      <Grid item>
        <Grid
          container
          direction={"row"}
          justify={"flex-start"}
          alignItems={"center"}
        >
          <Grid item>
            <Grid
              container
              direction={"row"}
              justify={"flex-start"}
              alignItems={"center"}
            >
              <Grid item>
                <Button
                  size={"small"}
                  className={clsx(classes.toolbarButton)}
                  onClick={() => {
                    setOpenView("date");
                  }}
                >
                  {date ? date.format("ddd,") : "Selected Week"}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size={"small"}
                  className={clsx(classes.toolbarButton)}
                  onClick={() => {
                    setOpenView("month");
                  }}
                >
                  {date ? date.format("MMM") : "Selected Month"}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size={"small"}
                  className={clsx(classes.toolbarButton)}
                  onClick={() => {
                    setOpenView("date");
                  }}
                >
                  {date ? date.format("DD") : "Selected Date"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={clsx(classes.marginLeft)}>
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
            <Grid
              container
              direction={"row"}
              justify={"flex-start"}
              alignItems={"center"}
            >
              <Grid item>
                <Button
                  size={"small"}
                  className={clsx(classes.timeButton, classes.marginLeft)}
                  onClick={() => {
                    setOpenView("hours");
                  }}
                >
                  {date ? date.format("hh") : "Selected Date"}
                </Button>
              </Grid>
              <Grid item>
                <Button size={"small"} className={clsx(classes.timeColon)}>
                  {":"}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size={"small"}
                  className={clsx(classes.timeButton)}
                  onClick={() => {
                    setOpenView("minutes");
                  }}
                >
                  {date ? date.format("mm") : "Selected Date"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CCDateTimeToolbarHeader;
