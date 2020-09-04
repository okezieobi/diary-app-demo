import React from 'react';
import { useHistory } from 'react-router-dom';

import Dashboard from '../layouts/Dashboard';

export default function () {
  const history = useHistory();

  const handleLogout = () => {
    history.push('/signin');
  };

  return (
    <Dashboard
      signout={handleLogout}
    >
      <div>Entry deatils</div>
    </Dashboard>
  );
}
