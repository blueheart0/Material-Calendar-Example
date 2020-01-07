import { makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { DatePicker } from "@material-ui/pickers";
import clsx from "clsx";
import moment from "moment";
import PropTypes from "prop-types";
import React, { useEffect, useMemo, useState } from "react";
import {
  dayIsBetween,
  isFirstDayOfWeek,
  isLastDayOfWeek,
  makeDateClone
} from "../../Utils/momentUtils";
import CCWeekToolbar from "./Component/CCWeekToolbar";

const useStyle = makeStyles(
  theme => ({
    dayWrapper: {
      position: "relative"
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
    firstHighlight: {
      color: theme.palette.common.black,
      background: theme.palette.secondary.main,
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
      "& .MuiIconButton-label": {
        color: theme.palette.common.black
      }
    },
    firstWeekHighlight: {
      color: theme.palette.common.white,
      background: theme.palette.secondary.main,
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%"
    },
    rangeHighlight: {
      color: theme.palette.common.white,
      background: theme.palette.secondary.main
    },
    endWeekHighlight: {
      color: theme.palette.common.white,
      background: theme.palette.secondary.main,
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%"
    }
  }),
  { name: "CCDateBetweenPicker" }
);

const CCDateWeekPicker = props => {
  const { begin, onChange } = props;
  const [value, setValue] = useState(begin);
  const classes = useStyle();
  const weekRange = useMemo(
    () => [
      makeDateClone(value).startOf("week"),
      makeDateClone(value).endOf("week")
    ],
    [value]
  );
  useEffect(() => {
    setValue(begin);
  }, [begin]);
  const renderDay = (_date, _selectedDate, _dayInCurrentMonth) => {
    const dateClone = makeDateClone(_date);
    const isBetweenDay = dayIsBetween(...weekRange, dateClone);
    const isFirstWeekDay = isFirstDayOfWeek(dateClone);
    const isLastWeekDay = isLastDayOfWeek(dateClone);
    const wrapperClassName = clsx({
      [classes.rangeHighlight]: isBetweenDay,
      [classes.firstWeekHighlight]: isBetweenDay && isFirstWeekDay,
      [classes.endWeekHighlight]: isBetweenDay && isLastWeekDay
    });
    const dayClassName = clsx(classes.day, {
      [classes.nonCurrentMonthDay]: !_dayInCurrentMonth,
      [classes.highlightNonCurrentMonthDay]: !_dayInCurrentMonth && isBetweenDay
    });

    return (
      <div
        className={wrapperClassName}
        onClick={() => {
          setValue(dateClone);
          onChange([
            makeDateClone(dateClone).startOf("week"),
            makeDateClone(dateClone).endOf("week")
          ]);
        }}
      >
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
      autoOk
      variant="static"
      openTo="date"
      value={value}
      onChange={() => {}}
      renderDay={renderDay}
      ToolbarComponent={props => {
        return <CCWeekToolbar {...props} value={value} range={weekRange} />;
      }}
    />
  );
};
CCDateWeekPicker.propTypes = {
  begin: PropTypes.instanceOf(moment).isRequired,
  onChange: PropTypes.func.isRequired
};

export default CCDateWeekPicker;
