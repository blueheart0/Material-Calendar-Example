import { makeStyles, Popover } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import clsx from "clsx";
import moment from "moment";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import CCDateTimePicker from "../CCDateTimePicker";

const useStyle = makeStyles(
  () => ({
    root: {},
    button: { fontWeight: "bold" },
    grayButton: {
      color: "rgba(0, 0, 0, 0.54)"
    },
    noPaddingTop: {
      paddingTop: 0
    }
  }),
  { name: "CCDatePickerPopover" }
);

const CCDateTimePickerPopover = props => {
  const { open, onClose, date, onChange, ...others } = props;
  const [last, setLast] = useState(date);
  const classes = useStyle();
  useEffect(() => {
    setLast(date);
  }, [date]);
  return (
    <Popover open={open} onClose={() => onClose()} {...others}>
      <CCDateTimePicker
        date={last}
        onChange={e => {
          setLast(e);
        }}
      />
      <DialogActions className={clsx(classes.noPaddingTop)}>
        <Button
          color={"secondary"}
          size={"small"}
          className={clsx(classes.button, classes.grayButton)}
          onClick={() => {
            onClose();
          }}
        >
          취소
        </Button>
        <Button
          color={"secondary"}
          size={"small"}
          className={clsx(classes.button)}
          onClick={() => {
            onChange(last);
            onClose();
          }}
        >
          확인
        </Button>
      </DialogActions>
    </Popover>
  );
};
CCDateTimePickerPopover.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(moment).isRequired,
  onChange: PropTypes.func.isRequired
};
export default CCDateTimePickerPopover;
