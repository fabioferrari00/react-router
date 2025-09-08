import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ul className="list-unstyled d-flex">
              <li className='me-3'><NavLink to="/">Home</NavLink></li>
              <li className='me-3'><NavLink to="/about-us">About us</NavLink></li>
              <li className='me-3'><NavLink to="/products">Products</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
