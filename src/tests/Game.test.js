import React from "react";
import Game from "../pages/Game";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { data, dataFailed } from "./helpers/mock";
import userEvent from "@testing-library/user-event";
import App from "../App";

jest.setTimeout(35000);

describe('Page Game', () => {
    beforeEach(() => {
        global.fetch = jest.fn(async () => ({
            json: async () => data
          }));
    })
    afterEach(function() {
        global.fetch.mockReset();
        });
    
    test('Verifica se a page Settings é renderizada', () => {
    renderWithRouterAndRedux(<Game />, { initialEntries: ['/game'] });
    const GameName = screen.getByRole('heading', {level: 1, name: 'Página do Game'});
    expect(GameName).toBeInTheDocument();
    });


    test('Verifica se são renderizados os elementos de uma questão e o timer', async() => {
        global.fetch = jest.fn(async () => ({
            json: async () => data
          }));

    renderWithRouterAndRedux(<Game />, { initialEntries: ['/game'] });
    const time = screen.getByText(30)
    expect(time).toBeInTheDocument();
    const question = await screen.findByTestId('question-text');
    const category =  screen.getByTestId('question-category');
    const answerCorrect = screen.getByTestId('correct-answer');
    const oneanswerIncorrect = screen.getByTestId('wrong-answer-0')

    expect(question).toBeInTheDocument()
    expect(question).toHaveTextContent(data.results[0].question)
    expect(category ).toBeInTheDocument()
    expect(answerCorrect).toBeInTheDocument()
    expect(oneanswerIncorrect ).toBeInTheDocument()
 })
 test('Verifica se ao clicar numa das respostas é adicionada uma borda com a cor respectiva a sua veracidade e aparece o botão "next"', async() => {
    renderWithRouterAndRedux(<Game />, { initialEntries: ['/game'] });
    const question = await screen.findByTestId('question-text');
    const answerCorrect = screen.getByTestId('correct-answer');
    const oneanswerIncorrect = screen.getByTestId('wrong-answer-0')
    const buttonNext = screen.queryByTestId('btn-next')

    expect(answerCorrect).not.toHaveStyle('border: 3px solid rgb(6, 240, 15)')
    expect(answerCorrect.disabled).toBe(false);
    expect(oneanswerIncorrect).not.toHaveStyle('border: 3px solid red')
    expect(buttonNext).not.toBeInTheDocument()

    userEvent.click(answerCorrect);

    expect(answerCorrect).toHaveStyle('border: 3px solid rgb(6, 240, 15)')
    expect(oneanswerIncorrect).toHaveStyle('border: 3px solid red')
    expect(screen.queryByTestId('btn-next')).toBeInTheDocument()
 })

 test('Verifica se ao clicar numa resposta o score atualiza conforme o acerto ou o erro e se ao final o botão next redireciona a outra página', async() => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputName = screen.getByTestId('input-player-name');
    const inputEmail = screen.getByTestId('input-gravatar-email');

    userEvent.type(inputName, "aluno");
    userEvent.type(inputEmail, "aluno@trybe.com"); 

    const btnPlay = screen.getByTestId("btn-play");
    userEvent.click(btnPlay);

    const question = await screen.findByTestId('question-text');
    const oneanswerIncorrect = screen.getByTestId('wrong-answer-0')
    userEvent.click(oneanswerIncorrect)
    userEvent.click(screen.getByTestId('btn-next'))
    expect(screen.getByTestId('header-score')).toHaveTextContent(0)

    userEvent.click(screen.getByTestId('correct-answer'))
    userEvent.click(screen.getByTestId('btn-next'))

    expect(screen.getByTestId('header-score')).toHaveTextContent(70)


    userEvent.click(screen.getByTestId('correct-answer'))
    userEvent.click(screen.getByTestId('btn-next'))

    expect(screen.getByTestId('header-score')).toHaveTextContent(110)


    userEvent.click(screen.getByTestId('correct-answer'))
    userEvent.click(screen.getByTestId('btn-next'))

    expect(screen.getByTestId('header-score')).toHaveTextContent(180)


    userEvent.click(screen.getByTestId('correct-answer'))

    expect(screen.getByTestId('header-score')).toHaveTextContent(280)

    const btnNext = screen.getByTestId('btn-next');
    userEvent.click(btnNext)
    const text = await screen.findByText('Well Done!')

    expect(history.location.pathname).toBe('/feedback')

 })

 test('Verifica se ao aguardar 30 segundos sem clicar numa das alternativas se as respostas ficam desabilitadas', async() => {
    const { debug } = renderWithRouterAndRedux(<Game />, { initialEntries: ['/game'] });
    const question = await screen.findByTestId('question-text');
    const answerCorrect = screen.getByTestId('correct-answer');
    expect(answerCorrect.disabled).toBe(false)

     await waitFor(() => {
        expect(answerCorrect.disabled).toBe(true)
     }, {timeout: 32000}) 
 })
})

test('Verifica se ao receber um token inválido se a página é redirecionada para o login', async () => {
    global.fetch = jest.fn( async () => ({
        json: async() => dataFailed
      }))
   
    const { history } = renderWithRouterAndRedux(<App />);
    const inputName = screen.getByTestId('input-player-name');
    const inputEmail = screen.getByTestId('input-gravatar-email');

    userEvent.type(inputName, "aluno");
    userEvent.type(inputEmail, "aluno@trybe.com"); 

    const btnPlay = screen.getByTestId("btn-play");
    userEvent.click(btnPlay);
    const h1 = await screen.findByText('Página do Game')
    expect(history.location.pathname).toBe('/game');
  
    await waitFor(() => {
        expect(screen.getByTestId('input-player-name')).toBeInTheDocument()
        expect(localStorage.getItem('token')).toBe(null);
        expect(history.location.pathname).toBe('/');
    });
});
