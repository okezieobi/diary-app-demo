import React from 'react';
import { useHistory } from 'react-router-dom';

import SignupLayout from '../layouts/Signup';

export default function () {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/dashboard');
  };

  return (
    <>
      <SignupLayout
        form={{
          handleSubmit: () => handleSubmit(),
        }}
      />
    </>
  );
}
