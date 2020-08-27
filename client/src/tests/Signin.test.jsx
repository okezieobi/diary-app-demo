import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { AppTest } from '../App';

describe('Signup page should render', () => {
  test('Renders signup page of app for large screens', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/signin']}>
        <AppTest />
      </MemoryRouter>,
    );

    expect(getByText(/Sign in/)).toBeInTheDocument();
  });
});
