import React from 'react'
import './hero.scss'

const Hero = ({ title, content }) => (
  <div className="hero">
    <h1 className="title">{title}</h1>
    {content && <p className="content">{content}</p>}
  </div>
)

export default Hero
