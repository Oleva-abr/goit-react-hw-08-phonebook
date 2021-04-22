import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authOperations } from '../redux/auth';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    console.log(value);
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <h2>Login Page</h2>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>Email address</label>

          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <div>
            <label>Password</label>

            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
