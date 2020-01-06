import { makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { DatePicker } from "@material-ui/pickers";
import clsx from "clsx";
import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import { isSameDay, makeDateClone } from "../../Utils/momentUtils";
import CCDayToolbar from "./Component/CCDayToolbar";

const useStyle = makeStyles(
  theme => ({
    root: {
      backgroundColor: theme.palette.secondary.main
    },
    day: {
      width: 36,
      height: 36,
      fontSize: theme.typography.caption.fontSize,
      margin: "0 2px",
      color: "inherit"
    },
    nonCurrentMonthDay: {
      color: theme.palette.text.disabled
    },
    highlightNonCurrentMonthDay: {
      color: "#676767"
    },
    highlight: {
      background: theme.palette.secondary.main,
      color: theme.palette.common.white,
      borderRadius: "50%"
    }
  }),
  { name: "CCDateDayPicker" }
);
const CCDateDayPicker = props => {
  const { begin, onChange } = props;
  const classes = useStyle();
  const rootClassName = clsx(classes.root);
  const renderDay = (_date, _selectedDate, _dayInCurrentMonth) => {
    let dateClone = makeDateClone(_date);
    let isSame = isSameDay(dateClone, begin);
    const wrapperClassName = clsx({
      [classes.highlight]: isSame
    });
    const dayClassName = clsx(classes.day, {
      [classes.nonCurrentMonthDay]: !_dayInCurrentMonth,
      [classes.highlightNonCurrentMonthDay]: !_dayInCurrentMonth && isSame
    });

    return (
      <div className={wrapperClassName} onClick={() => onChange(_date)}>
        <IconButton
          disableRipple={false}
          color={"secondary"}
          className={dayClassName}
        >
          <span> {dateClone.format("D")} </span>
        </IconButton>
      </div>
    );
  };

  return (
    <DatePicker
      className={rootClassName}
      autoOk
      variant="static"
      openTo="date"
      value={begin}
      onChange={onChange}
      renderDay={renderDay}
      ToolbarComponent={props => {
        return <CCDayToolbar {...props} selected={begin} />;
      }}
    />
  );
};

CCDateDayPicker.propTypes = {
  begin: PropTypes.instanceOf(moment).isRequired,
  onChange: PropTypes.func.isRequired
};

export default CCDateDayPicker;
