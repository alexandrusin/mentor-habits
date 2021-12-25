import React from 'react'

import './tags.scss'

const Tags = ({ tags }) =>
  tags && (
    <small className="tags">
      {tags.map((tag) => (
        <div key={tag} className="tag">
          {tag}
        </div>
      ))}
    </small>
  )

export default Tags
