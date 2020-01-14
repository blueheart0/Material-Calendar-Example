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
      fontSize: "30px",
      color: theme.palette.common.white
    },
    "@keyframes blink": {
      "0%": { opacity: 0 },
      "50%": { opacity: 0.5 },
      "100%": { opacity: 1 }
    },
    timeColon: {
      animation: "$blink .8s linear infinite"
    }
  }),
  { name: "CCTimeToolbar" }
);
const CCTimeToolbar = props => {
  const { selected, setOpenView } = props;
  // const [value, setValue] = useState(date);
  const classes = useStyle();
  // console.log(selected);
  // useEffect(() => {
  //   setValue(date);
  // }, [date]);
  return (
    <Grid
      className={clsx(classes.root)}
      container
      direction={"row"}
      justify={"center"}
      alignItems={"center"}
    >
      <Grid item>
        <Button
          className={clsx(classes.toolbarButton)}
          onClick={() => {
            setOpenView("hours");
          }}
        >
          {selected ? selected.format("HH") : "Selected Date"}
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
          {selected ? selected.format("mm") : "Selected Date"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default CCTimeToolbar;
