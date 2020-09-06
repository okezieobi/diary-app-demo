import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Dashboard from '../layouts/Dashboard';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
}));

export default function () {
  const classes = useStyles();
  const history = useHistory();
  const [title, body, createdOn, updatedOn] = JSON.parse(localStorage.getItem('clickedRow'));

  const handleLogout = () => {
    history.push('/signin');
  };

  return (
    <Dashboard
      signout={handleLogout}
    >
      <Paper className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Title:
              <br />
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Body:
              <br />
              {body}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              Created On:
              <br />
              {createdOn}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              Updated On:
              <br />
              {updatedOn}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
            >
              Edit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Dashboard>
  );
}
