import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers";
import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import CCTimeToolbar from "./Component/CCTimeToolbar";

const CCTimePicker = props => {
  const { onChange, date } = props;

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <TimePicker
        autoOk
        ampm={false}
        variant="static"
        openTo="hours"
        value={date}
        onChange={date => {
          onChange(date);
        }}
        minutesStep={1}
        ToolbarComponent={props => {
          return <CCTimeToolbar {...props} selected={date} />;
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
CCTimePicker.propTypes = {
  date: PropTypes.instanceOf(moment).isRequired,
  onChange: PropTypes.func.isRequired
};
CCTimePicker.defaultProps = {
  date: moment(),
  onChange: () => {}
};

export default CCTimePicker;
