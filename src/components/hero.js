import React from 'react'
import './hero.scss'

const Hero = ({ title, content }) => (
  <div className="hero">
    <h1 className="title">
      {title} {content && <span className="content">{content}</span>}
    </h1>
  </div>
)

export default Hero
