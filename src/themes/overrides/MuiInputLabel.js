import palette from "../basic/palette";

const fontSizeDense = 14;
const fontSizeNormal = 16;

export default {
  root: {
    "&$focused": {
      color: palette.select.main
    },
    "&$error": {
      color: palette.error.main
    }
  },
  asterisk: {
    color: "#ff0000"
  },
  formControl: {
    color: palette.input.main,
    fontSize: fontSizeNormal,
    transform: "translate(0px, 27px) scale(1)",
    "&$marginDense": {
      transform: "translate(0px, 15px) scale(1)",
      fontSize: fontSizeDense
    },
    "&$shrink": {
      transform: "translate(0px, 0px) scale(0.75)",
      "&$marginDense": {
        transform: "translate(0px, 0px) scale(0.75)"
      }
    }
  },
  filled: {
    transform: "translate(10px, 16px) scale(1)",
    "&$marginDense": {
      transform: "translate(10px, 12px) scale(1)"
    },
    "&$shrink": {
      transform: "translate(10px, 10px) scale(0.75)",
      "&$marginDense": {
        transform: "translate(10px, 7px) scale(0.75)"
      }
    }
  },
  outlined: {
    transform: "translate(10px, 16px) scale(1)",
    "&$marginDense": {
      transform: "translate(10px, 12px) scale(1)"
    },
    "&$shrink": {
      transform: "translate(11.5px, -7.5px) scale(0.8)",
      "&$marginDense": {
        transform: "translate(13px, -7px) scale(0.85)"
      }
    }
  }
};
