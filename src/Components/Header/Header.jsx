import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"

function Header() {
  return (
    <div >
      <header className='header'>
        <nav id='navbar'>
          <div>Header</div>
          <div id='pages'>
            <ul id='pages_ul'>
              <li>
                <NavLink id='navlink' to="/">SignUp</NavLink>
              </li>
              <li>
                <NavLink id='navlink' to="/profile" >Profile</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header