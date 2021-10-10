import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import HabitPreview from '../components/habit-preview'

class  HabitsIndex extends React.Component {
  render() {
    const habits = get(this, 'props.data.allContentfulHabit.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Habits" />
        <Hero title="Habits" content="Habits category description" />
        <HabitPreview habits={habits} />
      </Layout>
    )
  }
}

export default HabitsIndex

export const pageQuery = graphql`
  query HabitIndexQuery {
    allContentfulHabit(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        icon {
          title
          file {
            contentType
            fileName
            url
          }
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
          )
        }
        description {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
`
