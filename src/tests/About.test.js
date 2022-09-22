import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
  renderWithRouter(<About />);

  const headin = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });

  expect(headin).toBeInTheDocument();
});
test('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
  renderWithRouter(<About />);

  const pOne = screen.getByText(/This application simulates a Pokédex/i);
  const pTwo = screen.getByText(/One can filter Pokémons by type, and see more details/i);

  expect(pOne).toBeInTheDocument();
  expect(pTwo).toBeInTheDocument();
});

test('Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png', () => {
  renderWithRouter(<About />);

  const img = screen.getByRole('img');

  expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
