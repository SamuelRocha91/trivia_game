import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  onClick = () => {
    const { history, name, score, gravatarEmail } = this.props;
    const rankingObj = [{
      name,
      score,
      picture: gravatarEmail,
    }];
    const newObj = {
      name,
      score,
      picture: gravatarEmail,
    };
    const getLocalStorage = JSON.parse(localStorage.getItem('ranking'));
    if (getLocalStorage === null) {
      localStorage.setItem('ranking', JSON.stringify(rankingObj));
    } else {
      getLocalStorage.push(newObj);
      localStorage.setItem('ranking', JSON.stringify(getLocalStorage));
    } history.push('/ranking');
  };

  render() {
    const { assertions, score, history } = this.props;
    const three = 3;
    return (
      <div className="card-feedback" id="divGame">
        <Header />
        <div className="feedback-content">
          {assertions < three
            ? <p className="couldParag" data-testid="feedback-text">Could be better...</p>
            : <p className="wellParag" data-testid="feedback-text">Well Done!</p>}
          <p className="total">
            Total Score:
            {' '}
            <span data-testid="feedback-total-score">{score}</span>
          </p>
          <p className="total">
            Total Question:
            {' '}
            <span data-testid="feedback-total-question">{assertions}</span>
          </p>
          <div>
            <button
              className="buttonLogin"
              data-testid="btn-ranking"
              onClick={ this.onClick }
            >
              Ranking
            </button>
            <button
              className="buttonLogin"
              onClick={ () => history.push('/game') }
              data-testid="btn-play-again"
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  score: player.score,
  assertions: player.assertions,
  name: player.name,
  gravatarEmail: player.gravatarEmail,
});

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Feedback);
