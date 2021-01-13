import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import { Grid, Paper, IconButton, Grow } from '@material-ui/core';
import { PinCodeContext } from '../hooks/PinCodeProvider'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-around',
    },
    paper: {
      color: theme.palette.text.secondary,
      textAlign: "center",
      padding: 10,
    },
    button: {
      padding: 0,
      "& .MuiTouchRipple-root span": {
        backgroundColor: theme.palette.primary,
        color: theme.palette.background,
        opacity: .8,
      },
      height: 56,
      maxWidth: 56,
      width: '100%',
    },
    text: {
      fontWeight: 900,
      color: theme.palette.text.primary,
      alignContent: 'center',
    },
    back: {
      padding: 0,
    },
  })
);

const InputGrid = () => {
  const classes = useStyles();
  const { pinCode, setPinCode } = useContext(PinCodeContext);

  const onInput = (value: string | number) => {
    switch (value) {
      case 'forgot':
        break;
      case 'delete':
        setPinCode(`${pinCode}`.slice(0, -1));
        break;
      default:
        pinCode != null && pinCode.length < 5 ? setPinCode(pinCode + `${value}`) : null;
        break;
    }
  };

  return (
    <Grow in={true}>
      <Grid container className={classes.root} justify="center">
        <Grid item xs={12}>
          <Grid container justify="center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "forgot", 0, "delete"].map((value) => (
              <Grid key={value} item xs={4}>
                <Paper className={classes.paper}>
                  <IconButton aria-label="delete" color="primary" className={classes.button} onClick={() => onInput(value)}>
                    {value === 'delete'
                      ? <BackspaceOutlinedIcon className={classes.back} /> : <Typography variant="h5" className={classes.text}>
                        {value}
                      </Typography>}
                  </IconButton>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grow >
  );
};

export default InputGrid;
