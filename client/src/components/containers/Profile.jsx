import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import Dashboard from '../layouts/Dashboard';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
}));

export default function () {
  const classes = useStyles();

  return (
    <Dashboard profileSelect>
      <Paper className={classes.paper}>
        <Grid justify="center" container spacing={4}>
          <Grid item xs={3}>
            <Avatar />
          </Grid>
          <Grid item xs={12}>
            <Typography>Full Name:</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Email</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Username</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Created on:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Updated on:</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Dashboard>
  );
}
