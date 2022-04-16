import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"
import CategoryList from "./CategoryList"

import "./Navbar.scss"
import { MdMenu } from "react-icons/md"
import { MdMenuOpen } from "react-icons/md"

const Navbar = () => {
  const [show, setShow] = useState(false)

  const NavLinks = () => {
    return (
      <>
        <Link
          to="/habits/"
          className="nav-link"
          activeClassName="active"
          partiallyActive={true}
          onClick={() => setShow(false)}
        >
          Habits
        </Link>
        <Link
          to="/categories/"
          className="nav-link"
          activeClassName="active"
          partiallyActive={true}
          onClick={() => setShow(false)}
        >
          Categories
        </Link>
      </>
    )
  }

  const MobileNav = () => {
    return (
      <div className={`mobile-nav ${show ? "nav-open" : ""}`}>
        <div
          className="nav-backdrop"
          onClick={() => setShow(!show)}
          role="close-menu"
        ></div>
        <div className="nav-links">
          <NavLinks />
          <CategoryList counter={true} className="nav-links" />
        </div>
      </div>
    )
  }

  const MobileNavBtn = () => {
    return (
      <>
        {!show && (
          <MdMenu className="nav-mobile-btn" onClick={() => setShow(!show)} />
        )}
        {show && (
          <MdMenuOpen
            className="nav-mobile-btn"
            onClick={() => setShow(!show)}
          />
        )}
      </>
    )
  }

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            <Logo />
          </Link>
          <MobileNavBtn />
        </div>

        <div className="nav-links">{<NavLinks />}</div>
        {show && <MobileNav />}
      </nav>
      <nav>
        <CategoryList counter={true} className="nav-category-list" />
      </nav>
    </>
  )
}

export default Navbar
