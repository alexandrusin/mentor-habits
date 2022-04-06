import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

import Layout from "../components/Layout"
import HabitCard from "../components/HabitCard"

class RootIndex extends React.Component {
  render() {
    const habits = get(this, "props.data.allContentfulHabit.nodes")
    const categories = get(this, "props.data.allContentfulCategory.nodes")

    return (
      <Layout
        title="Habits, Hacks and Ideas"
        description="Make small improvements on a daily basis"
        location={this.props.location}
        page="homepage"
      >
        <div className="hero-intro-wrapper card">
          <h2>What would you like to improve?</h2>
          <div className="category-wrapper">
            {categories.map((category) => (
              <span className="category">{category.name}</span>
            ))}
          </div>
        </div>

        <div className="habit-cards-wrapper">
          {habits.map((habit) => (
            <HabitCard habit={habit} key={habit.slug} />
          ))}
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulHabit(sort: { fields: [name], order: DESC }) {
      nodes {
        name
        slug
        description {
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
    allContentfulCategory(sort: { fields: [name], order: DESC }) {
      nodes {
        name
      }
    }
  }
`
