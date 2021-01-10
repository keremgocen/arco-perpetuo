import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import { Grid, Paper, IconButton, Grow } from '@material-ui/core';

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
  return (
    <Grow in={true}>
      <Grid container className={classes.root} justify="center">
        <Grid item xs={12}>
          <Grid container justify="center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "forgot", 0, "delete"].map((value) => (
              <Grid key={value} item xs={4}>
                <Paper className={classes.paper}>
                  <IconButton aria-label="delete" color="primary" className={classes.button}>
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
    </Grow>
  );
};

export default InputGrid;
