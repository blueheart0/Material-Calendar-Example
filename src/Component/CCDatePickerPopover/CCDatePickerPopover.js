import { makeStyles, Popover } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import clsx from "clsx";
import moment from "moment";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import CCDatePicker from "../CCDatePicker";

const useStyle = makeStyles(
  theme => ({
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

const CCDatePickerPopover = props => {
  const { open, onClose, type, begin, end, onChange, ...others } = props;
  const [openPopover, setOpenPopover] = useState(open);
  useEffect(() => {
    setOpenPopover(open);
  }, [open]);
  const [last, setLast] = useState(null);
  const classes = useStyle();
  return (
    <Popover open={openPopover} onClose={onClose} {...others}>
      <CCDatePicker
        type={type}
        begin={begin}
        end={end}
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
          onClick={event => {
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
          onClick={event => {
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
CCDatePickerPopover.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["day", "week", "between"]).isRequired,
  begin: PropTypes.instanceOf(moment).isRequired,
  end: PropTypes.instanceOf(moment),
  onChange: PropTypes.func.isRequired
};
CCDatePickerPopover.defaultProps = {
  anchorEl: document.body
};
export default CCDatePickerPopover;
