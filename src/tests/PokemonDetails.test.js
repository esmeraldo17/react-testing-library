import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se as informações detalhadas do pokémon selecionado são renderizadas', () => {
  renderWithRouter(<App />);

  const link = screen.getByRole('link', {
    name: /more details/i,
  });

  userEvent.click(link);

  const headin = screen.getByRole('heading', {
    name: /pikachu details/i,
  });
  const summary = screen.getByRole('heading', {
    name: /summary/i,
  });
  const text = screen.getByText(
    /This intelligent Pokémon roasts hard berries with electricity to make them tender/i,
  );

  expect(headin).toBeInTheDocument();
  expect(summary).toBeInTheDocument();
  expect(text).toBeInTheDocument();
  expect(link).not.toBeInTheDocument();
});

test('Teste se existe na página uma seção com os map contendo as localizações do', () => {
  renderWithRouter(<App />);

  const link = screen.getByRole('link', {
    name: /more details/i,
  });

  userEvent.click(link);

  const gameLocation = screen.getByRole('heading', {
    name: /Game Locations of Pikachu/i,
  });
  const map1 = screen.getByText(/kanto power plant/i);
  const map2 = screen.getByText(/kanto viridian forest/i);
  const mapImg = screen.getAllByRole('img', { alt: /Pikachu location/i });

  expect(gameLocation).toBeInTheDocument();
  expect(map1).toBeInTheDocument();
  expect(map2).toBeInTheDocument();
  expect(mapImg[1].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  expect(mapImg[1].alt).toBe('Pikachu location');
  expect(mapImg[2].src).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  expect(mapImg[2].alt).toBe('Pikachu location');
});

test('Teste se o usuário pode favoritar um pokémon através da página de detalhes', () => {
  renderWithRouter(<App />);

  const link = screen.getByRole('link', {
    name: /more details/i,
  });

  userEvent.click(link);

  const checkbox = screen.getByRole('checkbox', {
    name: /pokémon favoritado\?/i,
  });

  const labelText = screen.getByText(/pokémon favoritado\?/i);

  expect(labelText).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
  expect(userEvent.click(checkbox));
});
