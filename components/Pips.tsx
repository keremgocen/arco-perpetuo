import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      justifyContent: "center",
      padding: 60,
    },
    item: {
      margin: 3,
    },
    box: {
      borderRadius: 3,
    },
  })
);

const InputGrid = () => {
  // const [spacing] = React.useState<GridSpacing>(2);
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
