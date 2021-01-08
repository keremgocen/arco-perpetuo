import React, { ReactNode } from 'react'
import Head from 'next/head'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';

type Props = {
  children?: ReactNode
  title?: string
}

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    backButton: {
      marginRight: spacing(2),
      color: '#66d7d1',
    },
    chatButton: {
      transform: 'rotateY(180deg)',
      color: '#66d7d1',
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
  }),
);

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static" color="transparent">
            <Toolbar>
              <IconButton edge="start" className={classes.backButton} aria-label="menu">
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Login
          </Typography>
              <IconButton edge="start" className={classes.chatButton} aria-label="menu">
                <ChatIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
        {children}
      </ThemeProvider>
    </div>
  )
};

export default Layout
