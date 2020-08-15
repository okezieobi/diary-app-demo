import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import BookIcon from '@material-ui/icons/BookOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';

import HomeBGOne from '../images/Home_1.svg';
import HomeBGTwo from '../images/Home_2.svg';
import HomeBGThree from '../images/Home_3.svg';

const useStyles = makeStyles((theme) => ({
  iconTitle: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      flexGrow: '1',
    },
  },
  title: {
    flexGrow: '1',
  },
  homeBackdrop1: {
    backgroundImage: `url(${HomeBGOne})`,
  },
  homeBackdrop2: {
    backgroundImage: `url(${HomeBGTwo})`,
  },
  homeBackdrop3: {
    backgroundImage: `url(${HomeBGThree})`,
  },
  setBackground: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    backgroundSize: 'contain',
  },
}));

function ElevationScroll({ children, window }) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar({ window }) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <ElevationScroll window={window}>
        <AppBar>
          <Toolbar>
            <Box className={classes.iconTitle}>
              <BookIcon />
            </Box>
            <Hidden xsDown>
              <Typography className={classes.title} variant="h6">MyDiary</Typography>
            </Hidden>
            <Link underline="none" href="/signup" color="inherit">
              <Typography variant="h6">Get Started</Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box my={2}>
          <Grid container>
            <Grid item xs={12} className={`${classes.setBackground} ${classes.homeBackdrop2}`} />
            <Grid item xs={12} className={`${classes.setBackground} ${classes.homeBackdrop3}`} />
            <Grid item xs={12} className={`${classes.setBackground} ${classes.homeBackdrop1}`} />
          </Grid>
        </Box>
      </Container>
    </>
  );
}

ElevateAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

ElevateAppBar.defaultProps = {
  window: undefined,
};
