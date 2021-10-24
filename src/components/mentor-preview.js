import React from 'react'
import { Link } from 'gatsby'

import Container from './container'
import Avatar from './avatar'
import Hero from './hero'
import Tags from './tags'
import PreviewList from './preview-list'
import './mentor-preview.scss'

const MentorPreview = ({ mentors }) => {
  if (!mentors) return null
  if (!Array.isArray(mentors)) return null

  return (
    <PreviewList>
      <Hero title="Mentors" content="you can follow" />
      <ul className="preview-list mentor-list">
        {mentors.map((mentor) => {
          return (
            <li className="entry-preview mentor-preview" key={mentor.slug}>
              <Link to={`/mentors/${mentor.slug}`} className="link">
                <div className="image_wrapper avatar_wrapper">
                  <Avatar
                    image={mentor.avatar.gatsbyImageData}
                    title={mentor.avatar.title}
                  />
                </div>
                <div className="content_wrapper info">
                  <h2 className="name">{mentor.name}</h2>
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
    </PreviewList>
  )
}

export default MentorPreview
