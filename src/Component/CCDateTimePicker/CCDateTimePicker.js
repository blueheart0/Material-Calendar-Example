import MomentUtils from "@date-io/moment";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import { CCDateTimeToolbar, CCDateTimeToolbarTab } from "./Component";

const CCDateTimePicker = props => {
  const { onChange, date } = props;
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DateTimePicker
        autoOk
        ampm={true}
        variant="static"
        openTo="date"
        value={date}
        onChange={date => {
          onChange(date);
        }}
        minutesStep={1}
        ToolbarComponent={props => {
          return (
            <>
              <CCDateTimeToolbar
                {...props}
                onChangeMeridiem={onChange}
                selected={date}
              />
              <CCDateTimeToolbarTab {...props} />
            </>
          );
        }}
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
