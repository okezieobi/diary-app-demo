import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { AppTest } from '../App';

describe('Home page should render in small and large screen', () => {
  test('Renders landing page of app for large screen', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <AppTest />
      </MemoryRouter>,
    );

    expect(getByText(/MyDiary/)).toBeInTheDocument();
    expect(getByText(/Get Started/)).toBeInTheDocument();
  });
});
