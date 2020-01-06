import MomentUtils from "@date-io/moment";
import { createMuiTheme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import moment from "moment";
import React, { useContext, useRef, useState } from "react";
import "./App.css";
import CCDatePicker from "./Component/CCDatePicker";

import { AppContext } from "./Context/AppContext";

const App = () => {
  const _inputRef = useRef();
  console.log("_inputRef", _inputRef);
  const [selectedDayDate, setSelectedDayDate] = useState(moment());
  const [selectedBetweenDate, setSelectedBetweenDate] = useState([
    moment(),
    moment()
  ]);
  return (
    <div className="App">
      {/*<TextField>TEST</TextField>*/}
      <Grid
        container
        direction={"column"}
        alignItems={"flex-start"}
        spacing={5}
      >
        <Grid item>
          <CCDatePicker
            type={"day"}
            begin={selectedDayDate}
            onChange={e => setSelectedDayDate(e)}
          />
        </Grid>
        <Grid item>
          <CCDatePicker
            type={"between"}
            begin={selectedBetweenDate[0]}
            end={selectedBetweenDate[1]}
            onChange={e => setSelectedBetweenDate(e)}
          />
        </Grid>
      </Grid>
    </div>
  );
};
const WrapApp = props => {
  const { appContext } = useContext(AppContext);
  console.log(appContext);
  return (
    <ThemeProvider theme={createMuiTheme(appContext.theme)}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <App {...props} />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};
export default WrapApp;
