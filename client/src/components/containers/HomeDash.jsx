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

export default function HomeDash() {
  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = () => {
    history.push('/signin');
  };

  const handleRowClick = () => {
    history.push('/entry');
  };

  const columns = ['title', 'body', 'created on', 'updated on'];
  const data = [
    ['test title 1', 'test body 1', 'created on 1', 'updated on 1'],
    ['test title 2', 'test body 2', 'created on 2', 'updated on 2'],
  ];
  const options = {
    filterType: 'checkbox',
    onRowClick: () => handleRowClick(),
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
          data={data}
        />
      </Dashboard>
    </div>
  );
}
