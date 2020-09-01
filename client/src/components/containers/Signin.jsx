import React from 'react';
import { useHistory } from 'react-router-dom';

import SigninLayout from '../layouts/Signin';

export default function () {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/dashboard');
  };

  return (
    <>
      <SigninLayout
        form={{
          handleSubmit: () => handleSubmit(),
        }}
      />
    </>
  );
}
