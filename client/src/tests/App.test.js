/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { AppTest } from '../App';

test('renders landing page of app', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <AppTest />
    </MemoryRouter>,
  );
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
