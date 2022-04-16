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
      <div className={"page-wrapper " + (page ? page : "default")}>
        <main className="main-wrapper">
          <Header title={title} description={description} />
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
