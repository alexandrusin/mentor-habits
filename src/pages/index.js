import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import HabitCard from "../components/HabitCard"

class RootIndex extends React.Component {
  render() {
    const habits = get(this, "props.data.allContentfulHabit.nodes")

    return (
      <Layout
        title="Habits, Hacks and Ideas"
        description="Make small improvements on a daily basis"
        location={this.props.location}
        page="homepage"
      >
        <Seo title="Habits" />
        <div className="habits-content">
          {habits.map((habit) => (
            <HabitCard habit={habit} key={habit.slug} />
          ))}
        </div>
      </Layout>
    )
  }
}

export default RootIndex

// filter: { category: { elemMatch: { name: { in: "Mental Health" } } } }
export const pageQuery = graphql`
  query HomeQuery {
    allContentfulHabit(sort: { fields: [name], order: ASC }) {
      nodes {
        name
        slug
        difficulty
        description {
          childMarkdownRemark {
            html
          }
        }
        category {
          name
          slug
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
