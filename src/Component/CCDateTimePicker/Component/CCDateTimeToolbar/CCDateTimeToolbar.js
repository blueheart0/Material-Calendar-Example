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
      height: 80,
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
    }
  }),
  { name: "CCDateTimeToolbar" }
);
const CCDateTimeToolbar = props => {
  const { selected, setOpenView, ...others } = props;
  // const [value, setValue] = useState(date);
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
          {selected ? selected.format("YYYY") : "Selected Year"}
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
                  {selected ? selected.format("ddd,") : "Selected Week"}
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
                  {selected ? selected.format("MMM") : "Selected Month"}
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
                  {selected ? selected.format("DD") : "Selected Date"}
                </Button>
              </Grid>
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
                  {selected ? selected.format("HH") : "Selected Date"}
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
                  {selected ? selected.format("mm") : "Selected Date"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CCDateTimeToolbar;
