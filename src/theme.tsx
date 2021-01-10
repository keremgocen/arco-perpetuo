import { createMuiTheme } from "@material-ui/core/styles";
import { Shadows } from "@material-ui/core/styles/shadows";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  shadows: Array(25).fill("none") as Shadows,
  palette: {
    primary: {
      main: "#66d7d1",
    },
    secondary: {
      main: "#2e262e",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "Arco Perpetuo Regular",
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: false,
    },
  },
});

export default theme;
