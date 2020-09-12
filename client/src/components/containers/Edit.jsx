import React from 'react';

import Dashboard from '../layouts/Dashboard';
import Form from '../layouts/Form';

export default function Compose() {
  const [title, body] = JSON.parse(localStorage.getItem('clickedRow'));
  return (
    <Dashboard homeSelect>
      <Form title={title} body={body} />
    </Dashboard>
  );
}
