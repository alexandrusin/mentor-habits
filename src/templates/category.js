import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import HabitCard from "../components/HabitCard"
import Icon from "../components/Icon"

import "./habit.scss"
import { template } from "lodash"

class CategoryTemplate extends React.Component {
  render() {
    const category = get(this.props, "data.contentfulCategory")
    const previous = get(this.props, "data.previous")
    const next = get(this.props, "data.next")
    const habits = get(this, "props.data.allContentfulHabit.nodes")

    console.log("template/category", category)

    return (
      <Layout title={category.name} page="category">
        <Icon svg={category.icon.svg} size={200} color="color-accent-1" />

        <div className="habits-content">
          {habits.map((habit) => (
            <HabitCard habit={habit} key={habit.slug} />
          ))}
        </div>

        {(previous || next) && (
          <nav>
            <ul className="bottom-page-navigation">
              {previous && (
                <li>
                  <Link to={`/categories/${previous.slug}`} rel="prev">
                    ← {previous.name}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <Link to={`/categories/${next.slug}`} rel="next">
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

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryBySlug(
    $name: String!
    $slug: String!
    $previousCategorySlug: String
    $nextCategorySlug: String
  ) {
    allContentfulHabit(
      filter: { category: { elemMatch: { name: { eq: $name } } } }
    ) {
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
          slug
          icon {
            svg {
              content
            }
          }
        }
      }
    }

    contentfulCategory(slug: { eq: $slug }) {
      name
      slug
      icon {
        svg {
          content
        }
      }
    }
    previous: contentfulCategory(slug: { eq: $previousCategorySlug }) {
      slug
      name
    }
    next: contentfulCategory(slug: { eq: $nextCategorySlug }) {
      slug
      name
    }
  }
`
