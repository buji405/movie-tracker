import React, { Component } from 'react'

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      passwordInput: ''
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
      passwordInput: ''
    })
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <form >
          <input value={this.state.emailInput}
                 onChange={(e) => this.setState({emailInput: e.target.value})}
                 type="email"
                 placeholder="email"/>
          <input value={this.state.passwordInput}
                 onChange={(e) => this.setState({passwordInput: e.target.value})}
                 type="password"
                 placeholder="password"/>
          <button onClick={(e) => {this.submitUser(e)}}>Submit</button>
        </form>
      </div>
    )
  }
}
