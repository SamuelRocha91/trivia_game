import React from "react";
import Feedback from "../pages/Feedback";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import { screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from "../App";


describe('Page feedback', () => {
    test('Verifica se a page Feedback é renderizada', () => {
    const { history } = renderWithRouterAndRedux(<Feedback />, { initialEntries: ['/feedback']});
    const feedbackText = screen.getByTestId('feedback-text');
    const feedbackScore = screen.getByTestId('feedback-total-score');
    const feedbackAssertion = screen.getByTestId('feedback-total-question');

    expect(feedbackText).toBeInTheDocument();
    expect(feedbackText).toHaveTextContent('Could be better...');
    expect(feedbackScore ).toBeInTheDocument();
    expect(feedbackScore).toHaveTextContent(0);
    expect(feedbackAssertion ).toBeInTheDocument();
    expect(feedbackAssertion ).toHaveTextContent(0);

    });

    test('Verifica se da página de feddback é possível voltar ao login', async() => {
        const { history } = renderWithRouterAndRedux(<App />);
        const inputName = screen.getByTestId('input-player-name');
        const inputEmail = screen.getByTestId('input-gravatar-email');

        userEvent.type(inputName, "aluno");
        userEvent.type(inputEmail, "aluno@trybe.com"); 

        const btnPlay = screen.getByTestId("btn-play");
        userEvent.click(btnPlay);

        const question = await screen.findByTestId('header-profile-picture');
        const oneanswerIncorrect = await screen.findByTestId('wrong-answer-0')
        userEvent.click(oneanswerIncorrect)
        userEvent.click(screen.getByTestId('btn-next'))

        userEvent.click(screen.getByTestId('correct-answer'))
        userEvent.click(screen.getByTestId('btn-next'))



        userEvent.click(screen.getByTestId('correct-answer'))
        userEvent.click(screen.getByTestId('btn-next'))



        userEvent.click(screen.getByTestId('correct-answer'))
        userEvent.click(screen.getByTestId('btn-next'))



        userEvent.click(screen.getByTestId('correct-answer'))


        const btnNext = screen.getByTestId('btn-next');
        userEvent.click(btnNext)
        const text = await screen.findByText('Well Done!')

        expect(history.location.pathname).toBe('/feedback')

        userEvent.click(screen.getByTestId("btn-play-again"))

        expect(history.location.pathname).toBe('/')
    })
    test('Verifica se é renderizada a mensagem correta quando o número de acertos é maior que 2', () => {
        const initialState = {
            player: {
              name: 'Samuel rocha',
              assertions: 5,
              score: 0,
              gravatarEmail: 'https://www.gravatar.com/avatar/23aa339e2f08e327608f189a00feb0c9'
            }
          }
          const { history, store } = renderWithRouterAndRedux(<Feedback />,  initialState, ['/feedback'] );

          const feedbackText = screen.getByTestId('feedback-text');

          expect(feedbackText).toBeInTheDocument();
          expect(feedbackText).toHaveTextContent('Well Done!');
    })

    test('Verifica se ao clicar no botão "Ranking" o jogador é redirecionado para a página de ranking', async() => {
        const { history } = renderWithRouterAndRedux(<App />);
        const inputName = screen.getByTestId('input-player-name');
        const inputEmail = screen.getByTestId('input-gravatar-email');

        userEvent.type(inputName, "aluno");
        userEvent.type(inputEmail, "aluno@trybe.com"); 

        const btnPlay = screen.getByTestId("btn-play");
        userEvent.click(btnPlay);

        const question = await screen.findByTestId('header-profile-picture');
        const oneanswerIncorrect = await screen.findByTestId('wrong-answer-0')
        userEvent.click(oneanswerIncorrect)
        userEvent.click(screen.getByTestId('btn-next'))

        userEvent.click(screen.getByTestId('correct-answer'))
        userEvent.click(screen.getByTestId('btn-next'))



        userEvent.click(screen.getByTestId('correct-answer'))
        userEvent.click(screen.getByTestId('btn-next'))



        userEvent.click(screen.getByTestId('correct-answer'))
        userEvent.click(screen.getByTestId('btn-next'))



        userEvent.click(screen.getByTestId('correct-answer'))


        const btnNext = screen.getByTestId('btn-next');
        userEvent.click(btnNext)
        const text = await screen.findByText('Well Done!')

        expect(history.location.pathname).toBe('/feedback')

        const btnRanking = screen.getByTestId('btn-ranking')

        userEvent.click(btnRanking)

        expect(history.location.pathname).toBe('/ranking')

        const btnHome = screen.getByTestId("btn-go-home")

        userEvent.click(btnHome)


        userEvent.type(screen.getByTestId('input-player-name'), "aluno");
        userEvent.type(screen.getByTestId('input-gravatar-email'), "aluno@trybe.com"); 

        const btnJogar= screen.getByTestId("btn-play");
        userEvent.click(btnJogar);

        const picture = await screen.findByTestId('header-profile-picture');
        const incorrect = await screen.findByTestId('wrong-answer-0')
        userEvent.click(incorrect)
        userEvent.click(screen.getByTestId('btn-next'))

        userEvent.click(screen.getByTestId('correct-answer'))
        userEvent.click(screen.getByTestId('btn-next'))



        userEvent.click(screen.getByTestId('correct-answer'))
        userEvent.click(screen.getByTestId('btn-next'))



        userEvent.click(screen.getByTestId('correct-answer'))
        userEvent.click(screen.getByTestId('btn-next'))



        userEvent.click(screen.getByTestId('correct-answer'))


        userEvent.click(screen.getByTestId('btn-next'));

        const word = await screen.findByText('Well Done!')

        expect(history.location.pathname).toBe('/feedback')

        userEvent.click(screen.getByTestId('btn-ranking'))

        const rankTitle = await screen.findByTestId('ranking-title');
        expect(history.location.pathname).toBe('/ranking');

      });
});
