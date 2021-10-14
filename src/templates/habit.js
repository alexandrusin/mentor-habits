import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Icon from '../components/icon'
import Tags from '../components/tags'

import './habit.scss'

class HabitTemplate extends React.Component {
  render() {
    const habit = get(this.props, 'data.contentfulHabit')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    console.log("habit", habit);
    console.log("HELLO", this.props.location);

    return (
      <Layout page="habit" location={this.props.location}>
        <Seo
          title={habit.title}
          description={habit.description.childMarkdownRemark.excerpt}
        />        
        <header className="header">
          <hgroup>
            <Icon
              image={habit.icon.file.url}
              title={habit.icon.title}
              size="large"
            />
            <h1 className="title">{habit.title}</h1>
          </hgroup>
          <div className="description"
            dangerouslySetInnerHTML={{
              __html: habit.description.childMarkdownRemark.html,
            }}
          />
          <div className="info">
            <time dateTime={habit.rawDate}>{habit.publishDate}</time> –{' '}
              {habit.body.childMarkdownRemark.timeToRead} minute read  
          </div>
        </header>
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: habit.body.childMarkdownRemark.html,
          }}
        />
        <Tags tags={habit.tags} />
        {(previous || next) && (
          <nav>
            <ul className="articleNavigation">
              {previous && (
                <li>
                  <Link to={`/habits/${previous.slug}`} rel="prev">
                    ← {previous.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <Link to={`/habits/${next.slug}`} rel="next">
                    {next.title} →
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

export default HabitTemplate

export const pageQuery = graphql`
  query HabitBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulHabit(slug: { eq: $slug }) {
      slug
      title

      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      icon {
        title
        file {
          contentType
          fileName
          url
        }
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      tags
      description {
        childMarkdownRemark {
          html
        }
      }
    }
    previous: contentfulHabit(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulHabit(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
