import React from 'react'
import { Link } from 'gatsby'

import Container from './container'
import Icon from './icon'
import Tags from './tags'
import './habit-preview.scss'

const HabitPreview = ({ habits }) => {
  if (!habits) return null
  if (!Array.isArray(habits)) return null

  return (
    <Container>
      <ul className="habit-list">
        {habits.map((habit) => {
          return (
            <li className="habit-preview" key={habit.slug}>
              <Link to={`/habits/${habit.slug}`} className="link">
                <Icon
                  image={habit.icon.file.url}
                  title={habit.icon.title}
                  size="small"
                />
                <h2 className="title">{habit.title}</h2>
              </Link>

              <div class="description">{habit.description.childMarkdownRemark.excerpt}</div>

              <div className="meta">
                <Tags tags={habit.tags} />
                {/* <small className="meta">{habit.publishDate}</small> */}
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default HabitPreview
