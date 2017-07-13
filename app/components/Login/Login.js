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
    e.preventDefault()
    this.props.handleSubmit()
    this.setState({
      emailInput: '',
      passwordInput: ''
    })
    console.log('Clicked');
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <form >
          <input value={this.state.emailInput} onChange={(e) => this.setState({emailInput: e.target.value})} type="email" placeholder="email"/>
          <input value={this.state.passwordInput} onChange={(e) => this.setState({passwordInput: e.target.value})} type="password" placeholder="password"/>
          <button onClick={(e) => {this.submitUser(e)}}>Submit</button>
        </form>
      </div>
    )
  }
}
