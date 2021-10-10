import React from 'react'
import './icon.scss'

const Icon = ({ image, color, size }) => (
  <>
    {image && (
      <div
        className={"icon " + (color ? color : "black") + " " + (size ? size : "medium")}
        style={{WebkitMaskImage: `url(https:${ image })`}}>
      </div>
    )}
  </>
)

export default Icon
