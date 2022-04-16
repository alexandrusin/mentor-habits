import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import addCategoryCounter from "../utils/addCategoryCounter"
import "./CategoryList.scss"

/**
 * Create a category list with a [counter] option
 * @param {Boolean} counter
 * @param {String} className
 * @return {HTMLElement}
 */
const CategoryList = ({ counter, className }) => {
  const data = useStaticQuery(query)
  const habits = data.allContentfulHabit.nodes
  let categories = data.allContentfulCategory.nodes
  categories = addCategoryCounter(habits, categories)

  // TODO: can be used to display HabitCard tags as well
  // if (!categories) return null

  return (
    <div className={`category-list ${className}`}>
      {categories.map((category) => (
        <Link
          to={`/categories/${category.slug}`}
          key={category.slug}
          activeClassName="active"
          className={`category${category.count ? "" : " empty"}`}
        >
          <span className="name">{category.name}</span>
          {counter && <span className="counter">{category.count}</span>}
        </Link>
      ))}
    </div>
  )
}

export default CategoryList

const query = graphql`
  {
    allContentfulCategory(sort: { fields: [name], order: DESC }) {
      nodes {
        name
        slug
      }
    }
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
