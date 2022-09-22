import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
  renderWithRouter(<FavoritePokemons />);

  const p = screen.getByText(/no favorite pokemon found/i);

  expect(p).toBeInTheDocument();
});
