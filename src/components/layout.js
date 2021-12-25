import React from 'react'

import './variables.scss'
import './global.css'
import './layout.scss'
import Seo from './seo'
import Navigation from './navigation'
import Hero from './hero'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { children, title, description, page } = this.props
    console.log('TEST', this.props)

    return (
      <>
        <Seo />
        <Navigation />
        <Hero title={title} description={description} />
        <main className={'page ' + (page ? page : 'default')}>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
