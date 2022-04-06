import React from "react"

import "../styles/reset.scss"
import "../styles/variables.scss"
import "../styles/global.scss"
import "./Layout.scss"

import Seo from "./Seo"
import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, title, description, page }) => {
  return (
    <>
      <Seo />
      <Navbar />
      <Header title={title} description={description} />
      <div className={"page-wrapper " + (page ? page : "default")}>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
