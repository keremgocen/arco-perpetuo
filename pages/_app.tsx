import React, { ElementType } from "react";
import Head from "next/head";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChatIcon from "@material-ui/icons/Chat";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import theme from "../src/theme";

type Props = {
  Component?: ElementType;
  pageProps: object;
  title?: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    backButton: {
      margin: 0,
      padding: 5,
      color: "#66d7d1",
    },
    chatButton: {
      padding: 5,
      transform: "rotateY(180deg)",
      color: "#66d7d1",
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
    },
  })
);

const App = ({
  Component,
  pageProps,
  title = "This is the default title",
}: Props) => {
  const classes = useStyles();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Container>
          <AppBar position="static" color="transparent">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.backButton}
                aria-label="menu"
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Login
              </Typography>
              <IconButton
                edge="start"
                className={classes.chatButton}
                aria-label="menu"
              >
                <ChatIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
