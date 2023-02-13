import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import App from '../../App';
import Settings from '../../pages/Settings';
import Game from '../../pages/Game';

describe('Page Login', () => {
    test('Verifica se a tela Login é renderizada corretamente', () => {
        renderWithRouterAndRedux(<App />);
        const btnEntrar = screen.getByRole('button', { name: /play/i });
        const btnSettings = screen.getByRole('button', { name: /settings/i });
        const inputEmail = screen.getByTestId('input-gravatar-email');
        const inputName = screen.getByTestId('input-player-name');
        expect(btnEntrar).toBeInTheDocument();
        expect(inputEmail).toBeInTheDocument();
        expect(inputName).toBeInTheDocument();
        expect(btnSettings).toBeInTheDocument();
    });

    test('Verifica a validação de nome e email', () => {
        const name = 'Aluno';
        const email = 'aluno@trybe,com';
        renderWithRouterAndRedux(<App />);
        const btnEntrar = screen.getByRole('button', { name: /play/i });
        const inputName = screen.getByTestId('input-player-name');
        const inputEmail = screen.getByTestId('input-gravatar-email');

        expect(btnEntrar).toBeDisabled();

        userEvent.type(inputEmail, '123');
        userEvent.type(inputName, '');

        expect(btnEntrar).toBeDisabled();

        userEvent.type(inputEmail, email);
        userEvent.type(inputName, '');

        expect(btnEntrar).toBeDisabled();

        userEvent.type(inputEmail, '1234');
        userEvent.type(inputName, name);

        expect(btnEntrar).toBeDisabled();
    });

    test("Verifica se ao clicar no botão Settings, redireciona para Settings", () => {
        const { history } = renderWithRouterAndRedux(<App />);    
        const settingsButton = screen.getByTestId("btn-settings");
        userEvent.click(settingsButton);    
        const { pathname } = history.location;
        expect(pathname).toBe("/settings");    
      });

    test('Verifica se ao clicar no botão Play, redireciona para a página Game', async () => {
        const {history} = renderWithRouterAndRedux(<App/>);    
        const name = screen.getByTestId("input-player-name");    
        const email = screen.getByTestId("input-gravatar-email");    
        userEvent.type(name, "aluno");
        userEvent.type(email, "aluno@trybe.com");    
        const btnPlay = screen.getByTestId("btn-play");
        expect(btnPlay).toBeInTheDocument();    
        userEvent.click(btnPlay);
        const h1 = await screen.findByRole('heading', {level: 1, name: 'Página do Game'})
        const { pathname } = history.location;
        expect(pathname).toBe("/game");    
      });
});

describe('Page Settings', () => {
    test('Verifica se a page Settings é renderizada', () => {
        renderWithRouterAndRedux(<Settings />, { initialEntries: ['/settings'], });
        const settingsName = screen.getByTestId('settings-title');
        expect(settingsName).toBeInTheDocument();
    });
});


