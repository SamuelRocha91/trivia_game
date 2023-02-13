import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { ACTION_SCORE } from '../redux/actions';

const URL_BASE = 'https://opentdb.com/api.php?amount=5&token=';
const TIMER = 1000;

class Game extends React.Component {
  state = {
    questions: [],
    questionCurrent: [],
    index: 0,
    color: false,
    time: 30,
    isDisabled: false,
  };

  componentDidMount() {
    this.fetchQuestions();
    this.timerFunction();
  }

  componentDidUpdate() {
    const { time } = this.state;
    if (time === 0) {
      clearInterval(this.timer);
    }
  }

  timerFunction = () => {
    this.timer = setInterval(() => {
      const { time } = this.state;
      if (time > 0 && time !== 1) {
        this.setState((prevState) => ({
          time: prevState.time - 1,
        }));
      }
      if (time === 1) {
        this.setState((prevState) => ({
          time: prevState.time - 1,
          isDisabled: true,
        }));
      }
    }, TIMER);
  };

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
    const arrayOfAnswers = [];
    const {
      correct_answer: correct,
      incorrect_answers: incorrect,
      difficulty,
    } = questions[index];

    arrayOfAnswers.push({
      answer: correct,
      id: 'correct-answer',
      borderColor: '3px solid rgb(6, 240, 15)',
      difficulty });

    incorrect.forEach((element, position) => {
      arrayOfAnswers.push({
        answer: element,
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

  saveAnswer = (id, difficulty) => {
    const { dispatch } = this.props;
    const { time } = this.state;

    let points = 0;
    const ten = 10;
    if (id.includes('correct-answer')) {
      points = ten + (time * this.pointsdificulty(difficulty));
    }
    this.setState({ color: true });
    dispatch(ACTION_SCORE(points));
    clearInterval(this.timer);
  };

  pointsdificulty = (difficulty) => {
    const three = 3;
    if (difficulty === 'hard') {
      return three;
    }
    if (difficulty === 'medium') {
      return 2;
    }
    return 1;
  };

  nextQuestion = () => {
    const { index } = this.state;
    const { history } = this.props;
    const maxIndexForFeedback = 4;

    if (index === maxIndexForFeedback) {
      history.push('/feedback');
    }

    this.setState((prevState) => ({
      index: prevState.index + 1,
    }), () => {
      this.timerFunction();
      this.setState({
        questionCurrent: this.createArrayAndShuffle(),
        color: false,
        time: 30,
        isDisabled: false,
      });
    });
  };

  render() {
    const { questionCurrent,
      index,
      questions,
      color,
      time,
      isDisabled,
    } = this.state;
    return (
      <div>
        <Header />
        <h1>Página do Game</h1>
        { questionCurrent.length > 0 && (
          <>
            <h3 data-testid="question-category">{questions[index].category}</h3>
            <h3 data-testid="question-text">{questions[index].question}</h3>
          </>)}
        { questionCurrent.length > 0 && questionCurrent
          .map(({ answer, id, borderColor, difficulty }) => (
            <div
              data-testid="answer-options"
              key={ id }
            >
              <button
                style={ { border: color && borderColor } }
                disabled={ isDisabled }
                data-testid={ id }
                onClick={ () => this.saveAnswer(id, difficulty) }
              >
                { answer }
              </button>
            </div>))}
        <p>{ time }</p>
        {color && (
          <button
            onClick={ this.nextQuestion }
            data-testid="btn-next"
          >
            Next
          </button>
        )}
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Game);
