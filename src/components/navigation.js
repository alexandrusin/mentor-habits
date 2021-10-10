import React from 'react'
import { Link } from 'gatsby'

import Logo from '../components/logo'

import * as styles from './navigation.module.scss'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      {/* <span className={styles.logo} /> */}
      <Logo />
      <span className={styles.navigationItem}>MH</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/habits/" activeClassName="active">
          Habits
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
