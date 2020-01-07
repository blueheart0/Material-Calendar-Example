import { Popover } from "@material-ui/core";
import moment from "moment";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { CCDatePicker } from "../index";

const CCDatePickerPopover = props => {
  const { open, onClose, type, begin, end, onChange, ...others } = props;
  const [openPopover, setOpenPopover] = useState(open);
  useEffect(() => {
    setOpenPopover(open);
  }, [open]);
  return (
    <Popover open={openPopover} onClose={onClose} {...others}>
      <CCDatePicker
        type={type}
        begin={begin}
        end={end}
        onChange={e => {
          setOpenPopover(false);
          onClose();
          onChange(e);
        }}
      />
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
export default CCDatePickerPopover;
