import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import CCDateBetweenPicker from "./Component/CCDateBetweenPicker";

const CCDatePicker = props => {
  return <CCDateBetweenPicker {...props} />;
};
CCDatePicker.propTypes = {
  type: PropTypes.oneOf(["day", "week", "between"]).isRequired,
  begin: PropTypes.instanceOf(moment).isRequired,
  end: PropTypes.instanceOf(moment),
  onChange: PropTypes.func.isRequired
};
export default CCDatePicker;
