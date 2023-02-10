import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    const { assertions, score } = this.props;
    const three = 3;
    return (
      <div>
        <Header />
        {assertions < three
          ? <p data-testid="feedback-text">Could be better...</p>
          : <p data-testid="feedback-text">Well Done!</p>}
        <p>
          Total Score:
          {' '}
          <span data-testid="feedback-total-score">{score}</span>
        </p>
        <p>
          Total Question:
          {' '}
          <span data-testid="feedback-total-question">{assertions}</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  score: player.score,
  assertions: player.assertions,
});

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
