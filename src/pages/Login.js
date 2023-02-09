import React from 'react';

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

  render() {
    const { name, email, isDisabled } = this.state;
    return (
      <div>
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
          data-testid="btn-play"
          disabled={ isDisabled }
        >
          PLAY
        </button>
      </div>
    );
  }
}

export default Login;
