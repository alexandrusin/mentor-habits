import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import HabitCard from "../components/HabitCard"

class CategoriesIndex extends React.Component {
  render() {
    const categories = get(this, "props.data.allContentfulCategory.nodes")

    return (
      <Layout
        page="categories"
        title="Categories you can browse"
        location={this.props.location}
      >
        <Seo title="Categories" />
        <div className="habits-content">
          {categories.map((category) => category.name)}
        </div>
      </Layout>
    )
  }
}

export default CategoriesIndex

export const pageQuery = graphql`
  query CategoriesIndexQuery {
    allContentfulCategory(sort: { fields: [name], order: DESC }) {
      nodes {
        name
        slug
      }
    }
  }
`
