import { Dialog, makeStyles } from "@material-ui/core";
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
  { name: "CCTimePickerDialog" }
);

const CCDateTimePickerDialog = props => {
  const { open, onClose, date, onChange, ...others } = props;
  const [openDialog, setOpenDialog] = useState(open);
  const [last, setLast] = useState(date || moment());
  const classes = useStyle();
  useEffect(() => {
    setOpenDialog(open);
  }, [open]);
  return (
    <Dialog open={openDialog} onClose={onClose} {...others}>
      <CCDateTimePicker
        date={date}
        onChange={e => {
          onChange(e);
          setLast(e);
        }}
      />
      <DialogActions className={clsx(classes.noPaddingTop)}>
        <Button
          color={"secondary"}
          size={"small"}
          className={clsx(classes.button, classes.grayButton)}
          onClick={() => {
            setOpenDialog(false);
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
            setOpenDialog(false);
            onClose(last);
          }}
        >
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CCDateTimePickerDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(moment).isRequired,
  onChange: PropTypes.func.isRequired
};
export default CCDateTimePickerDialog;
