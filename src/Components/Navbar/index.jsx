import React from 'react'
import logo from '../../image/eschler-logo.png'
import './style.css'
function NavBar () {
  return (
    <div className='nav sticky-top bg-light'>
      <nav className='container navbar navbar-expand-sm navbar-light bg-light'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo03'
          aria-controls='navbarTogglerDemo03'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <a className='navbar-brand logo' href='#'>
          <img src={logo} />{' '}
        </a>

        <div className='collapse navbar-collapse ' id='navbarTogglerDemo03'>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0 ms-auto ' id='#navbarTogglerDemo03'>
            <li className='nav-item active'>
              <a className='nav-link text-dark' href='#home'>
                Home
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link text-dark' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link text-dark' href='#service'>
                Service
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link text-dark' href='#portfolio'>
                Portfolio
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link text-dark' href='#team'>
                Team
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link text-dark' href='#blog'>
                Blog
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link text-dark' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
          <button className=' btn-brand ms-lg-3'>Download</button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
