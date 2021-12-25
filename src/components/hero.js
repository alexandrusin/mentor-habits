import React from 'react'
import './hero.scss'

const Hero = ({ title, description, content }) => {
  // if (!description) {
  //   description = 'test description'
  // }

  return (
    <div className="hero">
      <h1 className="title">{title}</h1>
      {description && <h4 className="description">{description}</h4>}
    </div>
  )
}

export default Hero
