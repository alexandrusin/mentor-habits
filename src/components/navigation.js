import React from 'react'
import { Link } from 'gatsby'

import Logo from '../components/logo'
import './navigation.scss'

const Navigation = () => (
  <nav role="navigation" className="navigation-wrapper" aria-label="Main">
    <Link to="/" className="logoLink">
      <Logo />
    </Link>
    <ul className="navigation">
      <li className="navigationItem">
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className="navigationItem">
        <Link to="/habits/" activeClassName="active">
          Habits
        </Link>
      </li>
      <li className="navigationItem">
        <Link to="/mentors/" activeClassName="active">
          Mentors
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
