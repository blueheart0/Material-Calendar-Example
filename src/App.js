import { createMuiTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import moment from "moment";
import React, { useContext, useState } from "react";
import "./App.css";
import {
  CCDatePickerDialog,
  CCDatePickerPopover,
  CCTimePicker
} from "./Component";
import CCDateTimePicker from "./Component/CCDateTimePicker";
import CCTimePickerDialog from "./Component/CCTimePickerDialog/CCTimePickerDialog";
import CCTimePickerPopover from "./Component/CCTimePickerPopover";

import { AppContext } from "./Context/AppContext";

const App = () => {
  const [selectedDayDate, setSelectedDayDate] = useState(moment());
  const [selectedWeekDate, setSelectedWeekDate] = useState(moment());
  const [selectedBetweenDate, setSelectedBetweenDate] = useState([
    moment(),
    moment()
  ]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedTime, setSelectedTime] = useState(moment());

  const handleClick = (event, param) => {
    console.log(event.currentTarget.id);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = event => {
    console.log(event);
    setAnchorEl(null);
  };
  return (
    <>
      <Grid container direction={"row"}>
        <Grid
          container
          item
          direction={"column"}
          alignItems={"center"}
          spacing={5}
          xs={6}
        >
          <CCDateTimePicker
            date={selectedTime}
            onChange={e => {
              console.log(e);
              setSelectedTime(e);
            }}
          />
          <CCTimePicker
            date={selectedTime}
            onChange={e => {
              console.log(e);
              setSelectedTime(e);
            }}
          />
          {/*  <Grid item>*/}
          {/*    <CCDatePicker*/}
          {/*      type={"day"}*/}
          {/*      begin={selectedDayDate}*/}
          {/*      onChange={e => setSelectedDayDate(e)}*/}
          {/*    />*/}
          {/*  </Grid>*/}
          {/*  <Grid item>*/}
          {/*    <CCDatePicker*/}
          {/*      type={"week"}*/}
          {/*      begin={selectedWeekDate}*/}
          {/*      onChange={e => {*/}
          {/*        setSelectedWeekDate(e[0]);*/}
          {/*      }}*/}
          {/*    />*/}
          {/*  </Grid>*/}

          {/*  <Grid item>*/}
          {/*    <CCDatePicker*/}
          {/*      type={"between"}*/}
          {/*      begin={selectedBetweenDate[0]}*/}
          {/*      end={selectedBetweenDate[1]}*/}
          {/*      onChange={e => {*/}
          {/*        console.log("onChange", e);*/}
          {/*        setSelectedBetweenDate(e);*/}
          {/*      }}*/}
          {/*    />*/}
          {/*  </Grid>*/}
        </Grid>
        <Grid
          container
          item
          direction={"column"}
          alignItems={"center"}
          spacing={5}
          xs={6}
        >
          <Grid item>
            <Button
              id={"pDay"}
              onClick={e => {
                handleClick(e);
              }}
            >
              Day Popover
            </Button>
            <Button
              id={"pWeek"}
              onClick={e => {
                handleClick(e);
              }}
            >
              Week Popover
            </Button>
            <Button
              id={"pBetween"}
              onClick={e => {
                handleClick(e);
              }}
            >
              Between Popover
            </Button>
            <CCDatePickerPopover
              open={Boolean(anchorEl) && anchorEl.id === "pDay"}
              anchorEl={anchorEl}
              onClose={handleClose}
              type={"day"}
              begin={selectedDayDate}
              onChange={e => setSelectedDayDate(e)}
            />
            <CCDatePickerPopover
              open={Boolean(anchorEl) && anchorEl.id === "pWeek"}
              anchorEl={anchorEl}
              type={"week"}
              onClose={handleClose}
              begin={selectedWeekDate}
              onChange={e => {
                setSelectedWeekDate(e[0]);
              }}
            />
            <CCDatePickerPopover
              open={Boolean(anchorEl) && anchorEl.id === "pBetween"}
              anchorEl={anchorEl}
              type={"between"}
              onClose={handleClose}
              begin={selectedBetweenDate[0]}
              end={selectedBetweenDate[1]}
              onChange={e => setSelectedBetweenDate(e)}
            />
          </Grid>
          <Grid item>
            <Button
              id={"dDay"}
              onClick={e => {
                handleClick(e);
              }}
            >
              Day Dialog
            </Button>
            <Button
              id={"dWeek"}
              onClick={e => {
                handleClick(e);
              }}
            >
              Week Dialog
            </Button>
            <Button
              id={"dBetween"}
              onClick={e => {
                handleClick(e);
              }}
            >
              Between Dialog
            </Button>
            <CCDatePickerDialog
              open={Boolean(anchorEl) && anchorEl.id === "dDay"}
              onClose={handleClose}
              type={"day"}
              begin={selectedDayDate}
              onChange={e => setSelectedDayDate(e)}
            />
            <CCDatePickerDialog
              open={Boolean(anchorEl) && anchorEl.id === "dWeek"}
              type={"week"}
              onClose={handleClose}
              begin={selectedWeekDate}
              onChange={e => {
                setSelectedWeekDate(e[0]);
              }}
            />
            <CCDatePickerDialog
              open={Boolean(anchorEl) && anchorEl.id === "dBetween"}
              type={"between"}
              onClose={handleClose}
              begin={selectedBetweenDate[0]}
              end={selectedBetweenDate[1]}
              onChange={e => {
                console.log("onChange", e);
                setSelectedBetweenDate(e);
              }}
            />
          </Grid>
          <Grid item>
            <Button
              id={"dTime"}
              onClick={e => {
                handleClick(e);
              }}
            >
              Time Dialog
            </Button>
            <CCTimePickerDialog
              open={Boolean(anchorEl) && anchorEl.id === "dTime"}
              onClose={handleClose}
              date={selectedTime}
              onChange={e => {
                console.log("onChange", e);
                setSelectedTime(e);
              }}
            />
            <Button
              id={"pTime"}
              onClick={e => {
                handleClick(e);
              }}
            >
              Time Popover
            </Button>
            <CCTimePickerPopover
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && anchorEl.id === "pTime"}
              onClose={handleClose}
              date={selectedTime}
              onChange={e => {
                console.log("onChange", e);
                setSelectedTime(e);
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
const WrapApp = props => {
  const { appContext } = useContext(AppContext);
  console.log(appContext);
  return (
    <ThemeProvider theme={createMuiTheme(appContext.theme)}>
      <App {...props} />
    </ThemeProvider>
  );
};
export default WrapApp;
