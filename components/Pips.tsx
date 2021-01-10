import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CustomInput from "./CustomInput";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-around",
      padding: 30,
    },
    item: {
      margin: theme.spacing(0),
      width: 30,
      height: 30,
    },
    box: {
      backgroundColor: "lightgrey",
      borderRadius: 4,
      minWidth: 10,
      minHeight: 10,
    },
  })
);

const InputGrid = () => {
  const text = "12";
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.root}>
      {[0, 1, 2, 3, 4].map((value) => (
        <Grid item xs={2} sm={2} className={classes.item}>
          {/* <Box
            bgcolor={grey}
            // color="primary.contrastText"
            className={classes.box}
          > */}
          <CustomInput
            variant="outlined"
            id="custom-css-outlined-input"
            disabled={text.length > value}
            className={classes.box}
            autoFocus={false}
          />
          {/* </Box> */}
        </Grid>
      ))}
    </Grid>
  );
};

export default InputGrid;
