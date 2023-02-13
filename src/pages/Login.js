import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTokenApi } from '../Api/fetchApi';
import { ACTION_AVATAR } from '../redux/actions';

class Login extends React.Component {
  state = {
    name: '',
    email: '',
    isDisabled: true,
  };

  validate = () => {
    const { name, email } = this.state;
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const regexEmail = new RegExp(regex);
    const emailBool = regexEmail.test(email);
    return emailBool && name.length > 0;
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      const verifyValidate = this.validate();
      this.setState({ isDisabled: !(verifyValidate) });
    });
  };

  handleClick = async () => {
    const { history, dispatch } = this.props;
    const { email, name } = this.state;
    const token = await getTokenApi();
    dispatch(ACTION_AVATAR(email, name));
    localStorage.setItem('token', token);
    history.push('/game');
  };

  render() {
    const { name, email, isDisabled } = this.state;
    const { history } = this.props;

    return (
      <>
        <h1 className="headOneLogin">Trivia Game</h1>
        <div className="divInput">
          <label>
            <input
              data-testid="input-player-name"
              name="name"
              type="text"
              placeholder="Escreva seu nome"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            <input
              data-testid="input-gravatar-email"
              type="email"
              name="email"
              placeholder="Escreva seu email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>

          <button
            className="buttonLogin"
            data-testid="btn-play"
            disabled={ isDisabled }
            onClick={ this.handleClick }
          >
            PLAY
          </button>

          <button
            className="buttonLogin"
            data-testid="btn-settings"
            type="button"
            onClick={ () => history.push('/settings') }
          >
            Settings
          </button>
        </div>

      </>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
