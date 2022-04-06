import React from "react"
import "./Header.scss"

const Header = ({ title, description, content }) => {
  // if (!description) {
  //   description = 'test description'
  // }

  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      {description && <h4 className="description">{description}</h4>}
    </header>
  )
}

export default Header
