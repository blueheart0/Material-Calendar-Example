import { makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { DatePicker } from "@material-ui/pickers";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useEffect, useMemo, useState } from "react";
import {
  dayIsBetween,
  isFirstDayOfWeek,
  isLastDayOfWeek,
  isSameDay,
  makeDateClone,
  sortFunc
} from "../../Utils/momentUtils";
import { CCBetweenToolbar } from "./Component/CCBetweenToolbar";

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
    selectingHighLight: {
      color: theme.palette.common.white,
      background: theme.palette.primary.main,
      borderRadius: "50%"
    },
    selectingHighLightInRange: {
      color: theme.palette.common.white,
      background: theme.palette.secondary.main
    },
    selectingDayHighLightInRange: {
      color: theme.palette.common.white,
      background: theme.palette.primary.main,
      borderRadius: "50%"
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
    endHighlight: {
      color: theme.palette.common.black,
      background: theme.palette.secondary.main,
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      "& .MuiIconButton-label": {
        color: theme.palette.common.black
      }
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

const CCDateBetweenPicker = props => {
  const { begin, end, onChange } = props;
  const [selectedDate, setSelectedDate] = useState([begin, end]);
  const [selectingDate, setSelectingDate] = useState([]);
  const [innerValue, setInnerValue] = useState(null);
  const sortedSelectedDate = useMemo(() => [...selectedDate].sort(sortFunc), [
    selectedDate
  ]);
  const sortedSelectingDate = useMemo(() => [...selectingDate].sort(sortFunc), [
    selectingDate
  ]);
  const classes = useStyle();
  useEffect(() => {
    setSelectedDate([begin, end]);
  }, [begin, end]);
  useEffect(() => {
    onChange(selectedDate);
  }, [selectedDate]);
  useEffect(() => {
    onChange(selectedDate);
  }, [selectedDate]);
  useEffect(() => {
    if (selectingDate.length === 2) {
      let _temp = [...selectingDate];
      setSelectedDate(_temp);
      setSelectingDate([]);
    }
  }, [selectingDate]);
  const setDateRange = date => {
    let _temp = [...selectingDate];
    _temp.push(date);
    setSelectingDate(_temp);
  };

  const _onChange = date => {
    setDateRange(date);
  };
  const renderRange = (_date, _selectedDate, _dayInCurrentMonth) => {
    let dateClone = makeDateClone(_date);
    // let selectedDateClone = makeDateClone(_selectedDate);

    const isFirstDay = isSameDay(dateClone, sortedSelectedDate[0]);
    const isLastDay = isSameDay(dateClone, sortedSelectedDate[1]);
    const isBetweenDay = dayIsBetween(...sortedSelectedDate, dateClone);
    const isFirstWeekDay = isFirstDayOfWeek(dateClone);
    const isLastWeekDay = isLastDayOfWeek(dateClone);
    const isSelectingDay = sortedSelectingDate.reduce(
      (accumulator, currentValue) => {
        if (isSameDay(dateClone, currentValue)) {
          accumulator = true;
        }
        return accumulator;
      },
      false
    );

    const wrapperClassName = clsx({
      [classes.firstHighlight]: isFirstDay && isBetweenDay,
      [classes.endHighlight]: isLastDay && isBetweenDay,
      [classes.firstWeekHighlight]: isFirstWeekDay && isBetweenDay,
      [classes.endWeekHighlight]: isLastWeekDay && isBetweenDay,
      [classes.rangeHighlight]: isBetweenDay
    });

    const selectWrapperClassName = clsx({
      [classes.selectingHighLight]: isSelectingDay && !isBetweenDay
    });

    const dayClassName = clsx(classes.day, {
      [classes.selectingDayHighLightInRange]: isSelectingDay && isBetweenDay,
      [classes.nonCurrentMonthDay]: !_dayInCurrentMonth,
      [classes.highlightNonCurrentMonthDay]: !_dayInCurrentMonth && dayIsBetween
    });

    return (
      <div
        className={wrapperClassName + " " + selectWrapperClassName}
        onClick={() => _onChange(_date)}
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
      onChange={date => {
        if (date) {
          setInnerValue(date);
        }
      }}
      label="Basic example"
      value={innerValue}
      animateYearScrolling
      inputVariant={"outlined"}
      renderDay={renderRange}
      autoOk={false}
      openTo={"date"}
      variant={"static"}
      views={["year", "date"]}
      ToolbarComponent={props => {
        return (
          <CCBetweenToolbar
            {...props}
            selecting={sortedSelectingDate}
            range={sortedSelectedDate}
          />
        );
      }}
    />
  );
};
CCDateBetweenPicker.propTypes = {
  begin: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};
export default CCDateBetweenPicker;
