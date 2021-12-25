import React from 'react'
import './icon.scss'

const Icon = ({ svg, color, size }) => {
  const iconStyles = { color: color }

  return (
    <>
      {svg && svg.content && (
        <div
          className={'icon ' + size}
          style={iconStyles}
          dangerouslySetInnerHTML={{ __html: svg.content }}
        ></div>
      )}
    </>
  )
}

export default Icon

// TODOD: create habit difficulty classes and send it as icon color
