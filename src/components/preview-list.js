import React from 'react'
import './preview-list.scss'

const PreviewList = ({ children, as = 'div' }) => {
  const Tag = as
  return <Tag className="preview-wrapper">{children}</Tag>
}

export default PreviewList
