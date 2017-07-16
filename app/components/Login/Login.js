import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      passwordInput: '',
      name: '',
      signedIn: false
    };
  }

  submitUser(e) {
    e.preventDefault();
    this.props.fetchUserData('/api/users/',
                              this.state.emailInput.toLowerCase(),
                              this.state.passwordInput);

    this.setState({
      emailInput: '',
      passwordInput: '',
    });
  }

  signUpUser (e) {
    e.preventDefault();
    this.setState({
      signedIn: !this.state.signedIn
    });
  }

  addNewUserBtn (e) {
    const { emailInput, passwordInput, name } = this.state;

    e.preventDefault()
    this.props.fetchNewUser('api/users/new', emailInput, passwordInput, name);
  }

  render() {
    const { errors } = this.props.state;
    const signedIn = this.state.signedIn;

    const invalid = errors === 'INVALID CREDENTIALS' ? 'Invalid Credentials, please try again': null;
    const duplicate = errors === 'DUPLICATE' ? 'That email is taken, please try again' : null;

    const submitUserBtn = <button className="button"onClick={(e) => {this.submitUser(e)}}>Submit</button>;
    const addUserBtn =<button className="button" onClick={(e) => {this.addNewUserBtn(e)}}>Submit New User</button>;
    const name = <input type="text"
                        placeholder = "name"
                        onChange={(e) => this.setState({name: e.target.value})} />;

    return (
      <div className="login-container">
        <p className="message login-scroll">Welcome, please login or sign up!</p>
        <div className="form-container">
          <form className="login-form">
            {signedIn ? name : null}
            <input value={this.state.emailInput}
                   onChange={(e) => this.setState({emailInput: e.target.value})}
                   type="email"
                   placeholder="email"
                   className="email-input" />
            <input value={this.state.passwordInput}
                   onChange={(e) => this.setState({passwordInput: e.target.value})}
                   type="password"
                   placeholder="password"
                   className="password-input" />
            {signedIn ? addUserBtn : submitUserBtn}
            <p className="message">Don't have an account? Sign up below!</p>
            <button className="button" onClick={(e) => this.signUpUser(e)}>
              {signedIn? 'Login' : 'Sign up'}
            </button>
            <p className='invalid'>{invalid || duplicate || null}</p>
          </form>
        </div>
      </div>
    );
  }
}
