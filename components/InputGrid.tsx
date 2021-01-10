import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    text: {
      padding: 10,
      flexGrow: 1,
      textAlign: "center",
    },
  })
);

const InputGrid = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justify="center">
      <Grid item xs={12}>
        <Grid container justify="center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "forgot", 0, "delete"].map((value) => (
            <Grid key={value} item xs={4}>
              <Paper className={classes.paper}>
                <Typography variant="h5" className={classes.text}>
                  {value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InputGrid;
