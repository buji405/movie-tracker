import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (props, state) => {
  console.log(props.state);
  const logoutBtn = <NavLink to='/' activeClassName='selected'>
    <button onClick={(e) => { props.handleLogout() }}>Log Out</button>
  </NavLink>

  const logoutAppear = props.state.users.data ? logoutBtn : null
  return (
    <section className="nav-bar">
      <h1>MovieTracker</h1>
      <div className='navBar'>
        <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
        <NavLink to='/favorites' activeClassName='selected'>Favorites</NavLink>
        <NavLink to='/login' activeClassName='selected'>Login</NavLink>
          {logoutAppear}
      </div>
    </section>
  )
}
