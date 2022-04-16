import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"

import Seo from "../components/Seo"
import Layout from "../components/Layout"

import "./habit.scss"

class HabitTemplate extends React.Component {
  render() {
    const habit = get(this.props, "data.contentfulHabit")
    const categories = get(this.props, "data.contentfulCategory")
    const previous = get(this.props, "data.previous")
    const next = get(this.props, "data.next")

    return (
      <Layout title={habit.name} page="habit">
        <Seo
          title={habit.name}
          description={habit.description.childMarkdownRemark.excerpt}
        />
        <section className="card">
          <h2>Description</h2>
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: habit.description.childMarkdownRemark.html,
            }}
          />
        </section>
        <section className="card">
          <h2>Steps</h2>
          <div
            className="steps list"
            dangerouslySetInnerHTML={{
              __html: habit.steps.childMarkdownRemark.html,
            }}
          />
        </section>
        <section className="card">
          <h2>Links</h2>
          <div
            className="body list"
            dangerouslySetInnerHTML={{
              __html: habit.body.childMarkdownRemark.html,
            }}
          />
        </section>

        {(previous || next) && (
          <nav>
            <ul className="bottom-page-navigation">
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
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    contentfulCategory(slug: { eq: $slug }) {
      name
      slug
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
