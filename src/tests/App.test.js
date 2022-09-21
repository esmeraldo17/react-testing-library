import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);

  const homeLink = screen.getByRole('link', { name: /Home/i });
  const aboutLink = screen.getByRole('link', { name: /About/i });
  const favoriteLink = screen.getByRole('link', { name: /favorite Pokémons/i });

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(favoriteLink).toBeInTheDocument();
});

test('Teste se ao clicar no link Home a pagina e redirecionada para rota /', () => {
  const { history } = renderWithRouter(<App />);

  const linkHome = screen.getByRole('link', { name: /home/i });

  userEvent.click(linkHome);

  const { location } = history;

  expect(location.pathname).toBe('/');
});

test('Teste se ao clicar no link About a pagina e redirecionada para rota /abot', () => {
  const { history } = renderWithRouter(<App />);

  const linkHome = screen.getByRole('link', { name: /about/i });

  userEvent.click(linkHome);

  const { location } = history;

  expect(location.pathname).toBe('/about');
});

test('Teste se ao clicar no link Fav a pagina e redic para rota /favorites', () => {
  const { history } = renderWithRouter(<App />);

  const linkHome = screen.getByRole('link', { name: /favorite pokémons/i });

  userEvent.click(linkHome);

  const { location } = history;

  expect(location.pathname).toBe('/favorites');
});
