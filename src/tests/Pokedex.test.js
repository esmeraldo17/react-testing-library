import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
  renderWithRouter(<App />);

  const headingTwo = screen.getByRole(
    'heading',
    { level: 2, name: /Encountered pokémons/i },
  );

  expect(headingTwo).toBeInTheDocument();
});

test('Teste se é exibido o próximo pokémon da lista quando o botão e clicado', () => {
  renderWithRouter(<App />);

  const button = screen.getByRole('button', { name: /próximo pokémon/i });
  userEvent.click(button);
  const pokemon = screen.getByText(/charmander/i);

  expect(button).toBeInTheDocument();
  expect(pokemon).toBeInTheDocument();
});

test('Teste se é mostrado apenas um pokémon por vez', () => {
  renderWithRouter(<App />);

  const imge = screen.getAllByRole('img');

  expect(imge.length).toBe(1);
});

test('Teste se a Pokédex tem os botões de filtro:', () => {
  renderWithRouter(<App />);

  const filterButton = screen.getAllByTestId('pokemon-type-button');
  const number = 7;

  expect(filterButton.length).toBe(number);
});

test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
  renderWithRouter(<App />);

  const resetButton = screen.getByRole('button', { name: /all/i });

  expect(resetButton).toBeInTheDocument();
});
