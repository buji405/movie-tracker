import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
  console.log(props);
  console.log(props.handleLogout);
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

  const loginBtn = <NavLink className="login" to='/login'
                            activeClassName='selected'>
                          Login
                   </NavLink>;

  return (
    <section className="header">
      <div className="logo">
        <div className="title">MovieTracker</div>
      </div>
      <div className='navBar'>
        <NavLink className="home" exact to='/' activeClassName='selected'>Home</NavLink>
        {data ? favoritesBtn : null}
        {data ? logoutBtn : loginBtn}
      </div>
    </section>
  );
}
