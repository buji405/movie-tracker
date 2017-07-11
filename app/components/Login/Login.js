import React from 'react'

export default class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
