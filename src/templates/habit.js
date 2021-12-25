import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Tags from '../components/tags'

import './habit.scss'

class HabitTemplate extends React.Component {
  render() {
    const habit = get(this.props, 'data.contentfulHabit')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    console.log('habit', habit)
    console.log('HELLO', this.props.location)

    return (
      <Layout title={habit.name} page="habit" location={this.props.location}>
        <Seo
          title={habit.name}
          description={habit.description.childMarkdownRemark.excerpt}
        />
        <header className="header">
          {/* <hgroup>
            <Icon svg={habit.icon.svg} title={habit.icon.title} size="large" />
            <h1 className="title">{habit.name}</h1>
          </hgroup> */}
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: habit.description.childMarkdownRemark.html,
            }}
          />
        </header>
        {/* <div
          className="steps"
          dangerouslySetInnerHTML={{
            __html: habit.steps.childMarkdownRemark.html,
          }}
        /> */}
        {/* <div
          className="benefits"
          dangerouslySetInnerHTML={{
            __html: habit.benefits.childMarkdownRemark.html,
          }}
        /> */}
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
                    ← {previous.name}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <Link to={`/habits/${next.slug}`} rel="next">
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

export default HabitTemplate

export const pageQuery = graphql`
  query HabitBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulHabit(slug: { eq: $slug }) {
      name
      slug
      icon {
        title
        file {
          contentType
          fileName
          url
        }
        svg {
          content
        }
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      tags
      description {
        childMarkdownRemark {
          html
        }
      }
      steps {
        childMarkdownRemark {
          html
        }
      }
      benefits {
        childMarkdownRemark {
          html
        }
      }
    }
    previous: contentfulHabit(slug: { eq: $previousPostSlug }) {
      slug
      name
    }
    next: contentfulHabit(slug: { eq: $nextPostSlug }) {
      slug
      name
    }
  }
`
