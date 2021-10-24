import React from 'react'

import Container from './container'
import './footer.scss'

const Footer = () => (
  <Container as="footer">
    <div className="container">
      Built with <a href="https://contentful.com/">Contentful</a> and{' '}
      <a href="https://gatsbyjs.com">Gatsby</a>
    </div>
  </Container>
)

export default Footer
