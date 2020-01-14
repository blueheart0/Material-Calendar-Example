import palette from "../basic/palette";
import shape from "../basic/shape";

const fontSizeDense = 14;
const fontSizeNormal = 16;
const inputHeight = 20;

const placeholderDense = {
  fontSize: fontSizeDense
};

export default {
  root: {
    borderRadius: shape.borderRadius,
    "&:hover $notchedOutline": {
      borderColor: palette.input.hover
    },
    "@media (hover: none)": {
      "&:hover $notchedOutline": {
        borderColor: palette.input.main
      }
    },
    "&$focused $notchedOutline": {
      borderColor: palette.select.main,
      borderWidth: 1
    },
    "&$error $notchedOutline": {
      borderColor: palette.error.main
    },
    "&$disabled $notchedOutline": {
      border: 0
    }
  },
  multiline: {
    padding: "18.5px 10px"
  },
  notchedOutline: { borderColor: palette.input.main },
  input: {
    height: inputHeight,
    padding: "14px 10px",
    "&$disabled": {
      borderRadius: shape.borderRadius,
      backgroundColor: "rgba(0, 0, 0, 0.16)"
    },
    fontSize: fontSizeNormal
  },
  inputMarginDense: {
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: fontSizeDense,
    "&::-webkit-input-placeholder": placeholderDense,
    "&::-moz-placeholder": placeholderDense, // Firefox 19+
    "&:-ms-input-placeholder": placeholderDense, // IE 11
    "&::-ms-input-placeholder": placeholderDense // Edge
  },
  inputMultiline: {
    height: "auto",
    padding: 0
  }
};
