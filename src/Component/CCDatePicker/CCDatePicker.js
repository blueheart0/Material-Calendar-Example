import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import CCDateBetweenPicker from "./Component/CCDateBetweenPicker";
import CCDateDayPicker from "./Component/CCDateDayPicker";
import CCDateWeekPicker from "./Component/CCDateWeekPicker";

const CCDatePicker = props => {
  const { type, begin, end, ...others } = props;
  switch (type) {
    case "day":
      return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <CCDateDayPicker begin={begin} {...others} />
        </MuiPickersUtilsProvider>
      );
    case "week":
      return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <CCDateWeekPicker begin={begin} {...others} />
        </MuiPickersUtilsProvider>
      );
    case "between":
      return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <CCDateBetweenPicker begin={begin} end={end} {...others} />
        </MuiPickersUtilsProvider>
      );
    default:
      return <div />;
  }
};
CCDatePicker.propTypes = {
  type: PropTypes.oneOf(["day", "week", "between"]).isRequired,
  begin: PropTypes.instanceOf(moment).isRequired,
  end: PropTypes.instanceOf(moment),
  onChange: PropTypes.func.isRequired
};
export default CCDatePicker;
