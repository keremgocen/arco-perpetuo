import React, { useContext, useState, useRef } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { PinCodeContext } from '../hooks/PinCodeProvider'
import axios from 'axios';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-around",
      padding: 40,
    },
    item: {
      margin: theme.spacing(0),
    },
    active: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 4,
    },
    dormant: {
      backgroundColor: 'lightgrey',
      borderRadius: 4,
    },
    popper: {
      border: '1px solid',
      padding: theme.spacing(1),
    },
  })
);

const InputGrid = () => {
  const classes = useStyles();
  const { pinCode } = useContext(PinCodeContext);
  const [popperText, setPopperText] = useState<string>('');
  const [popperColor, setPopperColor] = useState<string>('');
  const PINCODE_URL = process.env.API_PINCODE_URL;
  const localEl = useRef(null);

  if (pinCode && pinCode.length === 5 && PINCODE_URL) {
    const formData = new FormData();
    formData.append('pin_code', pinCode);
    axios.post(PINCODE_URL, formData)
      .then(response => {
        setPopperText(`${response.status} ${response.statusText}`);
        setPopperColor('lightgreen');
      }).catch(error => {
        setPopperText(`Error ${error.response?.status}`);
        setPopperColor(error.response ? 'yellow' : 'red');
      });
  }

  const open = Boolean(popperText) && !!pinCode && pinCode.length === 5;
  const id = open ? 'simple-popper' : undefined;

  return (
    <Grid container spacing={1} className={classes.root}>
      {[0, 1, 2, 3, 4].map((value) => (
        <Grid key={value} sm={2} xs={2} item className={classes.item} ref={localEl}>
          <TextField
            variant="outlined"
            id={"custom-css-outlined-input" + value}
            disabled={true}
            className={pinCode && pinCode.length > value ? classes.active : classes.dormant}
            autoFocus={false}
          />
        </Grid>
      ))
      }
      <Popper id={id} open={open} anchorEl={localEl.current} transition placement="top-end">
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography className={classes.popper} style={{ backgroundColor: popperColor }}>{popperText}</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Grid >
  );
};

export default InputGrid;
