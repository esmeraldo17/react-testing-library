import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

test('Teste se a página contém um heading h2 c ', () => {
  renderWithRouter(<NotFound />);

  const headingTwo = screen.getByRole(
    'heading',
    { level: 2, name: /Page requested not found/i },
  );

  expect(headingTwo).toBeInTheDocument();
});

test('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
  renderWithRouter(<NotFound />);

  const img = screen.getByRole('img');

  expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
