import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
  let { data } = props.state.users;
  const logoutBtn = <NavLink to='/'
                             activeClassName='selected'
                             className="logout"
                             onClick={(e) => { props.handleLogout() }}>
                      Logout
                    </NavLink>;
  const favoritesBtn = <NavLink className="favorites"
                                to='/favorites'
                                activeClassName='selected'>
                          Favorites
                        </NavLink>

  return (
    <section className="header">
      <div className="logo">
        <div className="title">MovieTracker</div>
      </div>
      <div className='navBar'>
        <NavLink className="home" exact to='/' activeClassName='selected'>Home</NavLink>
        {data ? favoritesBtn : null}
        <NavLink className="login" to='/login' activeClassName='selected'>Login</NavLink>
        {data ? logoutBtn : null}
      </div>
    </section>
  );
}
