import React, { Component } from 'react'

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      passwordInput: '',
      name: '',
      signedIn: false
    }
  }

  submitUser(e) {
    // console.log('submit user login compt',this.state.emailInput, this.state.passwordInput);
    e.preventDefault()
    this.props.fetchUserData('/api/users/', this.state.emailInput.toLowerCase(), this.state.passwordInput)
    // this.props.loginUser(this.state.emailInput, this.state.passwordInput)
    this.setState({
      emailInput: '',
      passwordInput: '',
    })
  }

  signUpUser (e) {
    e.preventDefault()
    this.setState({
      signedIn: !this.state.signedIn
    })
  }

  addNewUserBtn (e) {
    e.preventDefault()
    const { emailInput, passwordInput, name } = this.state;
    console.log('add new user');
    this.props.fetchNewUser('api/users/new', emailInput, passwordInput, name)
  }

  render() {
    console.log(this.props.state.errors);
    const invalid = this.props.state.errors === 'INVALID CREDENTIALS' ? 'Invalid Credentials, please try again': null
    const duplicate = this.props.state.errors === 'DUPLICATE' ? 'That email is taken, please try again' : null
    const name = <input type="text"
                      placeholder = "name"
                      onChange={(e) => this.setState({name: e.target.value})}/>

                    const submitUserBtn = <button onClick={(e) => {this.submitUser(e)}}>Submit</button>
    const addUserBtn =<button onClick={(e) => {this.addNewUserBtn(e)}}>Submit New User</button>
    const signInBtn = <button onClick={(e) => {this.signUpUser(e)}}>{this.state.signedIn ? 'Login' : 'Sign up'}</button>
    const logOut = <button onClick={(e) => {this.logOut(e)}}>Log Out</button>


    const signedIn = this.state.signedIn
    return (
      <div>
        <form className="login-form">
          {signedIn ? name : null}
          <input value={this.state.emailInput}
                 onChange={(e) => this.setState({emailInput: e.target.value})}
                 type="email"
                 placeholder="email"
                 className="email-input"/>
          <input value={this.state.passwordInput}
                 onChange={(e) => this.setState({passwordInput: e.target.value})}
                 type="password"
                 placeholder="password"
                 className="password-input"/>
         {!signedIn ? submitUserBtn : addUserBtn}
         {signInBtn}
          <p className='invalid'>{invalid || duplicate || null}</p>
        </form>
      </div>
    )
  }
}
