import React from 'react';
import Layout from '../components/Layout';
import InputGrid from '../components/InputGrid';
import SignIn from './signin';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    h1: {
      padding: 10,
      flexGrow: 1,
      textAlign: 'left',
    },
    h3: {
      padding: 10,
      flexGrow: 1,
      textAlign: 'left',
    },
  }),
);

const IndexPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <h1 className={classes.h1}>Enter your 5 digit code</h1>
      {/* <p> */}
      <h3 className={classes.h3}>This is the code you chose when you created your account.</h3>

      <InputGrid />
      <SignIn />
    </Layout>
  )
};

export default IndexPage
