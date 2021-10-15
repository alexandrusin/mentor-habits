import React from 'react'
import './avatar.scss'
import { GatsbyImage } from 'gatsby-plugin-image'

// const avatar = getImage({ image })

const Avatar = ({ image, title }) => (
  <>
    {image && (
      // <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />
      <GatsbyImage alt={title} image={image} />
    )}
  </>
)

export default Avatar
