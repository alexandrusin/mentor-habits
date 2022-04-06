import React, { useState } from "react"
import { Link } from "gatsby"

import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

import "./Navbar.scss"
import { MdMenu } from "react-icons/md"
import { MdMenuOpen } from "react-icons/md"

// import { MdBrightnessHigh } from "react-icons/md"
// import { MdBrightnessLow } from "react-icons/md"
// import { MdBrightness7 } from "react-icons/md"
// import { MdBrightnessHigh } from "react-icons/md"
// MdBrightness4
// MdBrightness5
// MdBrightness7

const Navbar = () => {
  const [show, setShow] = useState(false)

  const NavLinks = () => {
    return (
      <>
        <Link
          to="/habits/"
          className="nav-link"
          activeClassName="active"
          onClick={() => setShow(false)}
        >
          Habits
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
        <div className="nav-links">{/* <NavLinks /> */}</div>
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

        <div className="nav-links">{/* <NavLinks /> */}</div>
        {show && <MobileNav />}
      </nav>
    </>
  )
}

export default Navbar
