import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import HabitCard from "../components/HabitCard"

class HabitsIndex extends React.Component {
  render() {
    const habits = get(this, "props.data.allContentfulHabit.nodes")

    return (
      <Layout
        page="habits"
        title="Habits you can adopt"
        location={this.props.location}
      >
        <Seo title="Habits" />

        {habits.map((habit) => (
          // habit.name
          <HabitCard habit={habit} key={habit.slug} />
        ))}
      </Layout>
    )
  }
}

export default HabitsIndex

export const pageQuery = graphql`
  query HabitIndexQuery {
    allContentfulHabit(sort: { fields: [name], order: DESC }) {
      nodes {
        name
        slug
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
        category {
          name
          icon {
            svg {
              content
            }
          }
        }
      }
    }
  }
`
