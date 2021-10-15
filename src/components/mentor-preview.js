import React from 'react'
import { Link } from 'gatsby'

import Container from './container'
import Avatar from './avatar'
import Tags from './tags'
import './mentor-preview.scss'

const MentorPreview = ({ mentors }) => {
  if (!mentors) return null
  if (!Array.isArray(mentors)) return null

  return (
    <Container>
      <ul className="mentor-list">
        {mentors.map((mentor) => {
          return (
            <li className="mentor-preview" key={mentor.slug}>
              <Link to={`/mentors/${mentor.slug}`} className="link">
                <div className="avatar">
                  <Avatar
                    image={mentor.avatar.gatsbyImageData}
                    title={mentor.avatar.title}
                  />
                </div>
                <div className="info">
                  <h2 className="title">{mentor.name}</h2>
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: mentor.description.childMarkdownRemark.html,
                    }}
                  />
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default MentorPreview
