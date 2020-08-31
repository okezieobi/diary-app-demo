import React from 'react';
import MUIDataTable from 'mui-datatables';

import Dashboard from './Dashboard';

const columns = ['title', 'body', 'created on', 'updated on'];
const options = {
  filterType: 'checkbox',
};

export default function HomeDash() {
  return (
    <Dashboard>
      <MUIDataTable
        title="Entries"
        columns={columns}
        options={options}
      />
    </Dashboard>
  );
}
