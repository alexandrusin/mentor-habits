import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import HabitPreview from '../components/habit-preview'
import MentorPreview from '../components/mentor-preview'

class RootIndex extends React.Component {
  render() {
    // const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    // const [author] = get(this, 'props.data.allContentfulPerson.nodes')
    const habits = get(this, 'props.data.allContentfulHabit.nodes')
    const mentors = get(this, 'props.data.allContentfulMentor.nodes')

    console.log('habits - allContentfulHabit', habits)
    console.log('mentors - allContentfulMentor', mentors)

    return (
      <Layout
        title="Habits, Hacks and Ideas"
        description="Make small improvements on a daily basis"
        location={this.props.location}
        page="homepage"
      >
        <HabitPreview habits={habits} />
        <MentorPreview mentors={mentors} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          title
          file {
            contentType
            fileName
            url
          }
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          shortBio
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
    allContentfulHabit(sort: { fields: [name], order: DESC }) {
      nodes {
        name
        slug
        tags
        difficulty
        duration
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
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulMentor(sort: { fields: [name], order: DESC }) {
      nodes {
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
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
