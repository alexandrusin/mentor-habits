import React from 'react'
import { Link } from 'gatsby'

import Container from './container'
import Icon from './icon'
import Tags from './tags'
import PreviewList from './preview-list'
import './habit-preview.scss'

const HabitPreview = ({ habits }) => {
  if (!habits) return null
  if (!Array.isArray(habits)) return null

  return (
    <PreviewList>
      <ul className="preview-list habit-list">
        {habits.map((habit) => {
          return (
            <li className="entry-preview habit-preview" key={habit.slug}>
              <Link to={`/habits/${habit.slug}`} className="link">
                <div className="image_wrapper icon_wrapper">
                  <Icon
                    image={habit.icon.file.url}
                    title={habit.icon.title}
                    size="large"
                  />
                </div>
                <div className="content_wrapper info">
                  <h2 className="title">{habit.title}</h2>
                  {/* <div className="description">
                    {habit.description.childMarkdownRemark.excerpt}
                  </div> */}
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: habit.description.childMarkdownRemark.html,
                    }}
                  />
                  <div className="meta">
                    <Tags tags={habit.tags} />
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </PreviewList>
  )
}

export default HabitPreview
