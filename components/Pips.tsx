import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { PinCodeContext } from '../hooks/PinCodeProvider'

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
    active: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 4,
      minWidth: 10,
      minHeight: 10,
    },
    dormant: {
      backgroundColor: 'lightgrey',
      borderRadius: 4,
      minWidth: 10,
      minHeight: 10,
    },
  })
);

const InputGrid = () => {
  const { pinCode } = useContext(PinCodeContext);
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.root}>
      {[0, 1, 2, 3, 4].map((value) => (
        <Grid key={value} item xs={2} sm={2} className={classes.item}>
          <TextField
            variant="outlined"
            id="custom-css-outlined-input"
            disabled={true}
            className={pinCode && pinCode.length > value ? classes.active : classes.dormant}
            autoFocus={false}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default InputGrid;
