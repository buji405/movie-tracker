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
    console.log(this.props);
    // console.log('submit user login compt',this.state.emailInput, this.state.passwordInput);
    e.preventDefault()
    this.props.fetchUserData('/api/users/', this.state.emailInput, this.state.passwordInput)
    // this.props.loginUser(this.state.emailInput, this.state.passwordInput)
    this.setState({
      emailInput: '',
      passwordInput: '',
    })
  }

  signUpUser (e) {
    e.preventDefault()
    this.setState({
      signedIn: true
    })
  }

  addNewUserBtn (e) {
    e.preventDefault()
    console.log('add new user');
  }

  render() {
    const name = <input type="text"
                      placeholder = "name"
                      onChange={(e) => this.setState({name: e.target.value})}/>

                    const submitUserBtn = <button onClick={(e) => {this.submitUser(e)}}>Submit</button>
    const addUserBtn =<button onClick={(e) => {this.addNewUserBtn(e)}}>Submit New User</button>
    const signInBtn = <button onClick={(e) => {this.signUpUser(e)}}>Sign up here!</button>
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
         {!signedIn ? signInBtn : null}
        </form>
      </div>
    )
  }
}
