import React from "react"
import "./Icon.scss"

const Icon = ({ svg, color, size }) => {
  const iconStyles = {
    color: "var(--" + color + ")",
    width: size,
    height: size,
  }

  return (
    <>
      {svg && svg.content && (
        <div
          className={"icon " + size}
          style={iconStyles}
          dangerouslySetInnerHTML={{ __html: svg.content }}
        ></div>
      )}
    </>
  )
}

export default Icon

// TODOD: create habit difficulty classes and send it as icon color
