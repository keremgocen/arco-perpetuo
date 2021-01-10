import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-around',
      padding: 50,
    },
    item: {
      margin: theme.spacing(0),
    },
    box: {
      borderRadius: 4,
      minWidth: 30,
      minHeight: 30,
    },
  })
);

const InputGrid = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={2} sm={2} className={classes.item}>
        <Box
          bgcolor="primary.main"
          color="primary.contrastText"
          p={2}
          className={classes.box}
        />
      </Grid>
      <Grid item xs={2} sm={2} className={classes.item}>
        <Box
          bgcolor="primary.main"
          color="secondary.contrastText"
          p={2}
          className={classes.box}
        />
      </Grid>
      <Grid item xs={2} sm={2} className={classes.item}>
        <Box
          bgcolor="primary.main"
          color="error.contrastText"
          p={2}
          className={classes.box}
        />
      </Grid>
      <Grid item xs={2} sm={2} className={classes.item}>
        <Box
          bgcolor="primary.main"
          color="warning.contrastText"
          p={2}
          className={classes.box}
        />
      </Grid>
      <Grid item xs={2} sm={2} className={classes.item}>
        <Box
          bgcolor="primary.main"
          color="warning.contrastText"
          p={2}
          className={classes.box}
        />
      </Grid>
    </Grid>
  );
};

export default InputGrid;
