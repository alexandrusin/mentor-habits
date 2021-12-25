import React from 'react'

import Container from './container'
import './footer.scss'

const Footer = () => (
  <Container as="footer">
    <div className="container">
      <div className="left">
        <span>
          Get 1 percent better each day for one year, you’ll end up thirty-seven
          times better.
          {/* https://sive.rs/book/AtomicHabits */}
        </span>
      </div>
      <div className="right">
        Built with <a href="https://contentful.com/">Contentful</a> and{' '}
        <a href="https://gatsbyjs.com">Gatsby</a>
      </div>
    </div>
  </Container>
)

export default Footer
