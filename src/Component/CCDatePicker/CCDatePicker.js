import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import CCDateBetweenPicker from "./Component/CCDateBetweenPicker";
import CCDateDayPicker from "./Component/CCDateDayPicker";
import CCDateWeekPicker from "./Component/CCDateWeekPicker";

const CCDatePicker = props => {
  const { type, ...others } = props;
  switch (type) {
    case "day":
      return <CCDateDayPicker {...others} />;
    case "week":
      return <CCDateWeekPicker {...others} />;
    case "between":
      return <CCDateBetweenPicker {...others} />;
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
