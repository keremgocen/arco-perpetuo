import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: 50,
      width: 50,
    },
    control: {
      padding: theme.spacing(4),
    },
  }),
);

const InputGrid = () => {
  const [spacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2} justify="center">
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'forgot', 0, 'delete'].map((value) => (
            <Grid key={value} item xs={4}>
              <Paper className={classes.paper} >{value}</Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
};

export default InputGrid
