import * as React from "react";
import { ThemeOptions, createTheme, alpha } from "@mui/material/styles";
import { TransitionProps } from "@mui/material/transitions";
import { Slide } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
    text: {
      secondary: "#898F9C",
      primary: "#054c5c",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    action: {
      active: "#bdefeb",
      selected: "#bdefeb",
      selectedOpacity: 0.5,
      hoverOpacity: 0.1,
      focus: "#bdefeb",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
      // hoverOpacity: 0.1,
      // selected: "#bdefeb",
      // selectedOpacity: 0.16,
      // disabled: "#bdefeb",
      // disabledBackground: "#bdefeb",
      // disabledOpacity: 0.3,
      // focus: "#bdefeb",
      // focusOpacity: 0.12,
      // activatedOpacity: 0.24,
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
  },
};

export const theme = createTheme(themeOptions);
