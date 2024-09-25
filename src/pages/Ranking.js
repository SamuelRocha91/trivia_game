import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Ranking extends Component {
  onClick = () => {
    const { history } = this.props;
    return history.push('/');
  };

  render() {
    const readLocalStorage = JSON.parse(localStorage.getItem('ranking'));
    const sortLocalStorage = readLocalStorage.sort((a, b) => b.score - a.score);
    return (
      <div className="ranking-container" id="divGame">
        <h2 className="headRanking" data-testid="ranking-title">Ranking</h2>

        <div className="competidores">
          {sortLocalStorage.map((element, index) => (
            <div className="card-competidor" key="3">
              <img src={ element.picture } alt={ `Imagem do Jogador ${index + 1}` } />
              <p className="total">
                Jogador
                {' '}
                {index + 1}
                :
                {' '}
                <span>{element.name}</span>
              </p>
              <p className="total">
                Pontuação:
                <span>{element.score}</span>
              </p>
            </div>))}
        </div>

        <div className="turn-to-home">
          <button
            className="buttonNext"
            data-testid="btn-go-home"
            onClick={ this.onClick }
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Ranking);
