import React from 'react';
import { useHistory } from 'react-router-dom';
import MUIDataTable from 'mui-datatables';

import Dashboard from '../layouts/Dashboard';

const columns = ['title', 'body', 'created on', 'updated on'];
const options = {
  filterType: 'checkbox',
};

export default function HomeDash() {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/signin');
  };

  return (
    <Dashboard
      signout={handleSubmit}
    >
      <MUIDataTable
        title="Entries"
        columns={columns}
        options={options}
      />
    </Dashboard>
  );
}
