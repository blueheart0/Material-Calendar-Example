import { Dialog } from "@material-ui/core";
import moment from "moment";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { CCDatePicker } from "../index";

const CCDatePickerDialog = props => {
  const { open, onClose, type, begin, end, onChange, ...others } = props;
  const [openDialog, setOpenDialog] = useState(open);
  useEffect(() => {
    setOpenDialog(open);
  }, [open]);
  return (
    <Dialog open={openDialog} onClose={onClose} {...others}>
      <CCDatePicker
        type={type}
        begin={begin}
        end={end}
        onChange={e => {
          onChange(e);
          setOpenDialog(false);
          onClose();
        }}
      />
    </Dialog>
  );
};

CCDatePickerDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["day", "week", "between"]).isRequired,
  begin: PropTypes.instanceOf(moment).isRequired,
  end: PropTypes.instanceOf(moment),
  onChange: PropTypes.func.isRequired
};

export default CCDatePickerDialog;
