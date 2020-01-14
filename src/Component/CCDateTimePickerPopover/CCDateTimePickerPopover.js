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
  const [openPopover, setOpenPopover] = useState(open);
  useEffect(() => {
    setOpenPopover(open);
  }, [open]);
  const [last, setLast] = useState(date || moment());
  const classes = useStyle();
  return (
    <Popover open={openPopover} onClose={onClose} {...others}>
      <CCDateTimePicker
        date={date}
        onChange={e => {
          onChange(e);
          setLast(e);
          // setOpenDialog(false);
          // onClose();
        }}
      />
      <DialogActions className={clsx(classes.noPaddingTop)}>
        <Button
          color={"secondary"}
          size={"small"}
          className={clsx(classes.button, classes.grayButton)}
          onClick={() => {
            setOpenPopover(false);
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
            setOpenPopover(false);
            onClose(last);
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
CCDateTimePickerPopover.defaultProps = {
  anchorEl: document.body
};
export default CCDateTimePickerPopover;
