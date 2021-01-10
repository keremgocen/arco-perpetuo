import React from "react";
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";

const useStylesCustom = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //   border: "1px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 4,
      //   backgroundColor: theme.palette.primary.main,
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
      "&$focused": {
        backgroundColor: "#fff",
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
    focused: {},
  })
);

const CustomTextField = (props: TextFieldProps) => {
  const classes = useStylesCustom();

  return (
    <TextField
      InputProps={{ classes } as Partial<OutlinedInputProps>}
      {...props}
    />
  );
};

const CustomInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      //   backgroundColor: theme.palette.primary.main,
      //   "& label.Mui-focused": {
      //     color: "green",
      //   },
      //   "& .MuiInput-underline:after": {
      //     borderBottomColor: "green",
      //   },
      "& .MuiOutlinedInput-root": {
        //     "& fieldset": {
        //       borderColor: "red",
        //     },
        //     "&:hover fieldset": {
        //       borderColor: "yellow",
        //     },
        //     "&.Mui-focused fieldset": {
        //       borderColor: "green",
        //     },
        "&.Mui-disabled": {
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
  })
)(TextField);

export default CustomInput;
