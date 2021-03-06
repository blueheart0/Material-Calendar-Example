import { colors } from "@material-ui/core";
import { palette as common } from "../common";

const palette = {
  primary: {
    main: "#00897b"
  },
  secondary: {
    main: "#0277BD"
  },
  error: {
    main: "#f50057"
  },
  select: {
    dark: "#0094cc",
    main: "#40c4ff"
  },
  normal: {
    dark: "#F4F6F8",
    main: common.white
  },
  sub: {
    dark: "rgba(0, 0, 0, 0.64)",
    main: "rgba(0, 0, 0, 0.54)"
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  input: {
    main: "rgba(0, 0, 0, 0.38)",
    hover: "rgba(0, 0, 0, 0.87)"
  },
  background: {
    default: "#F4F6F8",
    paper: common.white
  },
  icon: "#01579b",
  divider: colors.grey[200]
};
export default palette;
