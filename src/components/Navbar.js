import React from 'react'
import Link from 'gatsby-link'

// import github from '../img/github-icon.svg'
import logo from '../img/teji_logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="TEJI" />
          </figure>
        </Link>
      </div>
      <div className="mission is-hidden-touch">
        <div className="mission-statement is-pulled-right">
          <h1>
            Providing students with non-traditional learning and social justice opportunities while preparing incarcerated students for successful reentry through education and technology.
          </h1>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
