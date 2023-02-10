import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

const URL_BASE = 'https://opentdb.com/api.php?amount=5&token=';

class Game extends React.Component {
  state = {
    questions: [],
    questionCurrent: [],
    index: 0,
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions = () => {
    const { history } = this.props;
    const INVALID_TOKEN = 3;
    const token = localStorage.getItem('token');
    fetch(`${URL_BASE}${token}`).then((response) => response.json()).then((data) => {
      if (data.response_code === INVALID_TOKEN) {
        localStorage.removeItem('token');
        return history.push('/');
      }
      this.setState({ questions: data.results }, () => {
        this.setState({ questionCurrent: this.createArrayAndShuffle() });
      });
    });
  };

  createArrayAndShuffle = () => {
    const { questions, index } = this.state;
    console.log(questions);
    const arrayOfAnswers = [];
    const {
      correct_answer: correct,
      incorrect_answers: incorrect,
      difficulty,
    } = questions[index];

    arrayOfAnswers.push({ answer: correct,
      id: 'correct-answer',
      borderColor: '3px solid rgb(6, 240, 15)',
      difficulty });

    incorrect.forEach((element, position) => {
      arrayOfAnswers.push({ answer: element,
        id: `wrong-answer-${position}`,
        borderColor: '3px solid red',
        difficulty });
    });

    const newArray = this.shuffleArray(arrayOfAnswers);
    return newArray;
  };

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const element = array[i];
      array[i] = array[j];
      array[j] = element;
    }
    return array;
  };

  // função ensinada no seguinte site https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj, acesso 22:47 de 09/02/2023

  render() {
    const { questionCurrent,
      questions,
      index } = this.state;
    return (
      <div>
        <Header />
        <h1>Página do Game</h1>
        { questions.length > 0 && (
          <>
            <h3 data-testid="question-category">{questions[index].category}</h3>
            <h3 data-testid="question-text">{questions[index].question}</h3>
          </>)}
        { questionCurrent.length > 0 && questionCurrent
          .map(({ answer, id }) => (
            <div
              data-testid="answer-options"
              key={ id }
            >
              <button
                data-testid={ id }
              >
                { answer }
              </button>
            </div>))}
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Game);
