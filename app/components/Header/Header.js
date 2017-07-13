import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <section className="nav-bar">
      <h1>MovieTracker</h1>
      <div className='navBar'>
        <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
        <NavLink to='/favorites' activeClassName='selected'>Favorites</NavLink>
        <NavLink to='/login' activeClassName='selected'>Login</NavLink>
      </div>
    </section>
  )
}
