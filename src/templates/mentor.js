import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Icon from '../components/icon'
import Tags from '../components/tags'

import './mentor.scss'

class MentorTemplate extends React.Component {
  render() {
    const mentor = get(this.props, 'data.contentfulMentor')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    console.log('mentor', mentor)
    console.log('HELLO', this.props.location)

    return (
      <Layout page="mentor" location={this.props.location}>
        <Seo
          title={mentor.name}
          description={mentor.description.childMarkdownRemark.excerpt}
        />
        <header className="header">
          <hgroup>
            {/* <Icon
              image={mentor.icon.file.url}
              title={mentor.icon.title}
              size="large"
            /> */}
            <h1 className="title">{mentor.name}</h1>
          </hgroup>
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: mentor.description.childMarkdownRemark.html,
            }}
          />
          <div className="info">
            <time dateTime={mentor.rawDate}>{mentor.publishDate}</time> –{' '}
            {mentor.body.childMarkdownRemark.timeToRead} minute read
          </div>
        </header>
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: mentor.body.childMarkdownRemark.html,
          }}
        />

        {(previous || next) && (
          <nav>
            <ul className="articleNavigation">
              {previous && (
                <li>
                  <Link to={`/mentors/${previous.slug}`} rel="prev">
                    ← {previous.name}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <Link to={`/mentors/${next.slug}`} rel="next">
                    {next.name} →
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        )}
      </Layout>
    )
  }
}

export default MentorTemplate

export const pageQuery = graphql`
  query MentorBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulMentor(slug: { eq: $slug }) {
      name
      slug
      avatar {
        title
        file {
          contentType
          fileName
          url
        }
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 100
          height: 100
        )
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
    previous: contentfulMentor(slug: { eq: $previousPostSlug }) {
      slug
      name
    }
    next: contentfulMentor(slug: { eq: $nextPostSlug }) {
      slug
      name
    }
  }
`
