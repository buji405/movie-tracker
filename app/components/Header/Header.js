import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
  let { data } = props.state.users;
  const logoutBtn = <NavLink to='/'
                             activeClassName='selected'
                             onClick={(e) => { props.handleLogout() }}>
                      Log Out
                    </NavLink>;

  return (
    <section className="nav-bar">
      <h1>MovieTracker</h1>
      <div className='navBar'>
        <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
        <NavLink to='/favorites' activeClassName='selected'>Favorites</NavLink>
        <NavLink to='/login' activeClassName='selected'>Login</NavLink>
        {data ? logoutBtn : null}
      </div>
    </section>
  );
}
