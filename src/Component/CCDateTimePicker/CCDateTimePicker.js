import MomentUtils from "@date-io/moment";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DateRangeIcon } from "@material-ui/pickers/_shared/icons/DateRangeIcon";
import { TimeIcon } from "@material-ui/pickers/_shared/icons/TimeIcon";
import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import { CCDateTimeToolbar } from "./Component";

const OPEN_TYPE = {
  DATE: "date",
  YEAR: "year",
  MONTH: "month",
  HOURS: "hours",
  MINUTES: "minutes"
};

const CCDateTimePicker = props => {
  const { onChange, date } = props;

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DateTimePicker
        autoOk
        ampm={true}
        variant="static"
        openTo={OPEN_TYPE.DATE}
        value={date}
        onChange={onChange}
        minutesStep={1}
        ToolbarComponent={CCDateTimeToolbar}
        timeIcon={<TimeIcon htmlColor={"#ffffff"} />}
        dateRangeIcon={<DateRangeIcon htmlColor={"#ffffff"} />}
      />
    </MuiPickersUtilsProvider>
  );
};
CCDateTimePicker.propTypes = {
  date: PropTypes.instanceOf(moment).isRequired,
  onChange: PropTypes.func.isRequired
};
CCDateTimePicker.defaultProps = {
  date: moment(),
  onChange: () => {}
};

export default CCDateTimePicker;
