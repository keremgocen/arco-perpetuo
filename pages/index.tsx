import React from "react";
import Container from "@material-ui/core/Container";
import InputGrid from "../components/InputGrid";
import Pips from "../components/Pips";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexFlow: 'wrap',
      height: '100vh',
    },
    textContainer: {
      display: 'flex',
      flexFlow: 'column wrap',
    },
    text: {
      padding: 10,
      flexGrow: 1,
      textAlign: "left",
    },
  })
);

const IndexPage = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.root}>
      <div className={classes.textContainer}>
        <Typography variant="h3" className={classes.text}>
          Enter your 5 digit code
        </Typography>
        <Typography variant="h6" className={classes.text}>
          This is the code you chose when you created your account.
        </Typography>
      </div>
      <Pips />
      <InputGrid />
      {/* <SignIn /> */}
    </Container>
  );
};

export default IndexPage;
