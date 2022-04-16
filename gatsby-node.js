const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for habit
  const habitPost = path.resolve("./src/templates/habit.js")
  const habitCategory = path.resolve("./src/templates/category.js")

  const habitResult = await graphql(
    `
      {
        allContentfulHabit(sort: { fields: [name], order: ASC }) {
          nodes {
            name
            slug
          }
        }
      }
    `
  )

  const categoryResult = await graphql(
    `
      {
        allContentfulCategory(sort: { fields: [name], order: ASC }) {
          nodes {
            name
            slug
          }
        }
      }
    `
  )

  if (habitResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      habitResult.errors
    )
    return
  }

  let habits = habitResult.data.allContentfulHabit.nodes
  let categories = categoryResult.data.allContentfulCategory.nodes

  // sort categories alphabetically by name
  // habits.sort((a, b) => {
  //   if (a.name < b.name) return -1
  //   if (a.name > b.name) return 1
  //   return 0
  // })
  // sort categories alphabetically by name
  // categories.sort((a, b) => {
  //   if (a.name < b.name) return -1
  //   if (a.name > b.name) return 1
  //   return 0
  // })

  // Create habit posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (habits.length > 0) {
    habits.forEach((habit, index) => {
      const previousPostSlug = index === 0 ? null : habits[index - 1].slug
      const nextPostSlug =
        index === habits.length - 1 ? null : habits[index + 1].slug

      createPage({
        path: `/habits/${habit.slug}/`,
        component: habitPost,
        context: {
          slug: habit.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
  if (categories.length > 0) {
    categories.forEach((category, index) => {
      const previousCategorySlug =
        index === 0 ? null : categories[index - 1].slug
      const nextCategorySlug =
        index === categories.length - 1 ? null : categories[index + 1].slug

      createPage({
        path: `/categories/${category.slug}/`,
        component: habitCategory,
        context: {
          name: category.name,
          slug: category.slug,
          previousCategorySlug,
          nextCategorySlug,
        },
      })
    })
  }
}
