import React from "react";
import Container from "@material-ui/core/Container";
import InputGrid from "../components/InputGrid";
import Pips from "../components/Pips";
// import SignIn from "./signin";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    h1: {
      padding: 10,
      flexGrow: 1,
      textAlign: "left",
    },
    h3: {
      padding: 10,
      flexGrow: 1,
      textAlign: "left",
    },
  })
);

const IndexPage = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <h1 className={classes.h1}>Enter your 5 digit code</h1>
      {/* <p> */}
      <h3 className={classes.h3}>
        This is the code you chose when you created your account.
      </h3>
      <Pips />
      <InputGrid />
      {/* <SignIn /> */}
    </Container>
  );
};

export default IndexPage;
