import React from 'react'

import './variables.css'
import './global.css'
import './layout.scss'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    console.log("HELLO 2", this.props);

    return (
      <>
        <Seo />
        <Navigation />
        <main className={"page " + (this.props.page ? this.props.page : "default")}>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
