import React from "react"
import "./Sidebar.scss"
import CategoryList from "./CategoryList"
import { Link } from "gatsby"

import Logo from "./Logo"

const Sidebar = ({ children }) => {
  return (
    <aside className="sidebar">
      {/* <Link to="/" className="nav-logo">
        <Logo />
      </Link> */}
      <CategoryList counter={true} className="sidebar-category-list" />
      {children}
    </aside>
  )
}

export default Sidebar
