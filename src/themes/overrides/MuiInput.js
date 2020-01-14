import palette from "../basic/palette";

const fontSizeDense = 14;
const fontSizeNormal = 16;
const inputHeight = 20;

export default {
  formControl: {
    "label + &": {
      marginTop: 0
    }
  },
  underline: {
    "&:after": {
      borderBottom: `2px solid ${palette.select.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      pointerEvents: "none" // Transparent to the hover style.
    },
    "&$focused:after": {
      transform: "scaleX(1)"
    },
    "&$error:after": {
      borderBottomColor: palette.error.main,
      transform: "scaleX(1)" // error is always underlined in red
    },
    "&:before": {
      borderBottom: `1px solid ${palette.input.main}`
    },
    "&:hover:not($disabled):before": {
      borderBottom: `2px solid ${palette.input.hover}`,
      "@media (hover: none)": {
        borderBottom: `1px solid ${palette.input.main}`
      }
    },
    "&$disabled:before": {
      borderBottomStyle: "dotted"
    }
  },
  input: {
    height: inputHeight,
    padding: "21px 0 7px 0",
    fontSize: fontSizeNormal
  },
  inputMarginDense: {
    padding: "14px 0 2px 0",
    fontSize: fontSizeDense
  },
  inputMultiline: {}
};
