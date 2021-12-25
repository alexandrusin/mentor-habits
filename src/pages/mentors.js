import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import MentorPreview from '../components/mentor-preview'

class MentorIndex extends React.Component {
  render() {
    const mentors = get(this, 'props.data.allContentfulMentor.nodes')

    return (
      <Layout
        page="mentors"
        title="Mentors you can follow"
        location={this.props.location}
      >
        <Seo title="Mentors" />
        <MentorPreview mentors={mentors} />
      </Layout>
    )
  }
}

export default MentorIndex

export const pageQuery = graphql`
  query MentorIndexQuery {
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
            excerpt
          }
        }
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
