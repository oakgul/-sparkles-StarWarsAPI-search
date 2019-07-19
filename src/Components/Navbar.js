import React from 'react';
import icon from './sw.jpg';
import heart from './heart.png';
import '../App.css'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-3 navbarDiv">
          <a className="navbar-brand" href="App.js">
            <img src={icon} alt="star wars icon" width='50px' />
          </a>
          <h3 className="navText">Star Wars Movie API</h3>
          <a href='App.js'>
            <h6 className='favorite'>favorites</h6><img className='heartIcon' src={heart} alt='favorite icon' />
          </a>
        </nav>
    </div>
  )
}