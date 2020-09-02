import React from 'react';
import { useHistory } from 'react-router-dom';
import MUIDataTable from 'mui-datatables';
import { makeStyles } from '@material-ui/core/styles';

import Dashboard from '../layouts/Dashboard';
import DashboardBG from '../../images/Home_Dash.svg';

const useStyles = makeStyles(() => ({
  backdrop: {
    backgroundImage: `url(${DashboardBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    width: '100vw',
    height: '100vh',
    backgroundSize: 'contain',
  },
}));

const columns = ['title', 'body', 'created on', 'updated on'];
const options = {
  filterType: 'checkbox',
};

export default function HomeDash() {
  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = () => {
    history.push('/signin');
  };

  return (
    <div className={classes.backdrop}>
      <Dashboard
        signout={handleSubmit}
      >
        <MUIDataTable
          title="Entries"
          columns={columns}
          options={options}
        />
      </Dashboard>
    </div>
  );
}
