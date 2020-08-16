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
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import HomeIcon from '@material-ui/icons/Home';
import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';
import TimerIcon from '@material-ui/icons/Timer';

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
  iconPadding: {
    marginRight: theme.spacing(2),
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
  description: {
    padding: theme.spacing(3),
    opacity: 0.9,
  },
  gridItem: {
    height: '30vh',
  },
  gridHeight: {
    height: '100vh',
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
    elevation: trigger ? 8 : 0,
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
        <Slide in>
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
        </Slide>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box my={2}>
          <Grid container>
            <Grid item xs={12} className={`${classes.setBackground} ${classes.homeBackdrop2}`}>
              <Grid className={classes.gridHeight} alignItems="center" container>
                <Grid item xs={12} sm={4}>
                  <Paper className={classes.description}>
                    <Typography align="center" color="primary" variant="h4">My Diary App Demo</Typography>
                    <Typography align="center" color="primary" variant="h6">
                      Some really cool description of application,
                      this is just filler
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className={`${classes.setBackground} ${classes.homeBackdrop3}`}>
              <Grid className={classes.gridHeight} alignItems="center" container>
                <Grid item xs={12}>
                  <Paper className={classes.description}>
                    <Typography gutterBottom color="primary" variant="h4">Features</Typography>
                    <Grid container justify="space-evenly" spacing={4}>
                      <Grid item xs={12} sm={3}>
                        <Toolbar>
                          <LockIcon color="primary" className={classes.iconPadding} />
                          <Typography color="primary" variant="h5">Secure</Typography>
                        </Toolbar>
                        <Container>
                          <Typography color="primary" variant="h6">App is secure</Typography>
                        </Container>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Toolbar>
                          <HomeIcon color="primary" className={classes.iconPadding} />
                          <Typography color="primary" variant="h5">Reliable</Typography>
                        </Toolbar>
                        <Container>
                          <Typography color="primary" variant="h6">App is reliable</Typography>
                        </Container>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Toolbar>
                          <LocalConvenienceStoreIcon color="primary" className={classes.iconPadding} />
                          <Typography color="primary" variant="h5">Convenient</Typography>
                        </Toolbar>
                        <Container>
                          <Typography color="primary" variant="h6">App is convenient</Typography>
                        </Container>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Toolbar>
                          <TimerIcon color="primary" className={classes.iconPadding} />
                          <Typography color="primary" variant="h5">Fast</Typography>
                        </Toolbar>
                        <Container>
                          <Typography color="primary" variant="h6">No slow downs</Typography>
                        </Container>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className={`${classes.setBackground} ${classes.homeBackdrop1}`}>
              <Grid className={classes.gridHeight} alignItems="center" container>
                <Grid item xs={12}>
                  <Paper className={classes.description}>
                    <Typography gutterBottom color="primary" variant="h4">Pricing</Typography>
                    <Grid container justify="space-evenly" spacing={4}>
                      <Grid item xs={12} sm={3}>
                        <Card className={classes.gridItem}>
                          <CardHeader title={
                            <Typography color="primary" variant="h5">Test</Typography>
                      }
                          />
                          <CardContent>
                            <Typography color="primary" variant="h6">Test</Typography>
                          </CardContent>
                          <CardActions>
                            <Button color="primary">Test Again</Button>
                          </CardActions>
                        </Card>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Card className={classes.gridItem}>
                          <CardHeader title={
                            <Typography color="primary" variant="h5">Test</Typography>
                      }
                          />
                          <CardContent>
                            <Typography color="primary" variant="h6">Test</Typography>
                          </CardContent>
                          <CardActions>
                            <Button color="primary">Test Again</Button>
                          </CardActions>
                        </Card>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Card className={classes.gridItem}>
                          <CardHeader title={
                            <Typography color="primary" variant="h5">Test</Typography>
                      }
                          />
                          <CardContent>
                            <Typography color="primary" variant="h6">Test</Typography>
                          </CardContent>
                          <CardActions>
                            <Button color="primary">Test Again</Button>
                          </CardActions>
                        </Card>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Card className={classes.gridItem}>
                          <CardHeader title={
                            <Typography color="primary" variant="h5">Test</Typography>
                      }
                          />
                          <CardContent>
                            <Typography color="primary" variant="h6">Test</Typography>
                          </CardContent>
                          <CardActions>
                            <Button color="primary">Test Again</Button>
                          </CardActions>
                        </Card>
                      </Grid>
                      <Grid />
                      <Grid />
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
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
