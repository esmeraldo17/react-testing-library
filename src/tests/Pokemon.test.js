import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se é renderizado um card com as informações de determinado pokémon', () => {
  renderWithRouter(<App />);

  const name = screen.getByText(/pikachu/i);
  const typePokemon = screen.getByTestId('pokemon-type');
  const averageWeight = screen.getByText(/average weight: 6\.0 kg/i);
  const imge = screen.getByRole('img', {
    name: /pikachu sprite/i,
  });

  expect(name).toBeInTheDocument();
  expect(typePokemon).toHaveTextContent('Electric');
  expect(averageWeight).toBeInTheDocument();
  expect(imge).toBeInTheDocument();
  expect(imge.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  expect(imge.alt).toBe('Pikachu sprite');
});

test('Teste se o card do pokémon indicado na Pokédex contém um link more details', () => {
  renderWithRouter(<App />);

  const link = screen.getByRole('link', {
    name: /more details/i,
  });

  expect(link).toBeInTheDocument();
  expect(link.href).toBe('http://localhost/pokemons/25');
});

test('Teste se ao clicar no link de navegação do pokémon vai para rota details', () => {
  const { history } = renderWithRouter(<App />);

  const link = screen.getByRole('link', {
    name: /more details/i,
  });
  userEvent.click(link);

  const { location: { pathname } } = history;

  expect(pathname).toBe('/pokemons/25');
});

test('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
  renderWithRouter(<App />);
  const link = screen.getByRole('link', { name: /more details/i });
  userEvent.click(link);

  const favorite = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });
  userEvent.click(favorite);

  const favoriteimage = screen.getByRole('img', {
    name: /pikachu is marked as favorite/i,
  });

  expect(favoriteimage).toBeInTheDocument();
  expect(favoriteimage.src).toBe('http://localhost/star-icon.svg');
  expect(favoriteimage.alt).toBe('Pikachu is marked as favorite');
});
