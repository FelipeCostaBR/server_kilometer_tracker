import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#565555",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#2B393D",
      light: "#5DC50A"
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#312E38"
    },
  },
  typography: {
    overline: {
      color: "#7c7c7c",
      lineHeight: 1
    },
    h1: {
      fontFamily: "Roboto, serif",
      color: "#FFFFFF",
      "fontWeight": "500"
    },
    h2: {
      fontFamily: "Roboto, serif",
      fontSize: 40,
      color: "#FFFFFF",
      "fontWeight": "500"
    },
    h3: {
      fontFamily: "Roboto, serif",
      fontSize: 35,
      color: "#FFFFFF",
      "fontWeight": "500"
    },
    body1: {
      fontSize: 17,
      color: "#FFFFFF",
      "WebkitFontSmoothing": "antialiased"
    },
    body2: {
      fontSize: 15,
      color: "#FFFFFF"
    },
    button: {
      "cursor": "pointer"
    }
  },
});

export default theme;
