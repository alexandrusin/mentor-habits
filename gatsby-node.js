const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')

  // Define a template for habit
  const habitPost = path.resolve('./src/templates/habit.js')

  // Define a template for mentor
  const mentorPost = path.resolve('./src/templates/mentor.js')

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  const habitResult = await graphql(
    `
      {
        allContentfulHabit {
          nodes {
            name
            slug
          }
        }
      }
    `
  )

  const mentorResult = await graphql(
    `
      {
        allContentfulMentor {
          nodes {
            name
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  if (habitResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      habitResult.errors
    )
    return
  }

  if (mentorResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      mentorResult.errors
    )
    return
  }

  const posts = result.data.allContentfulBlogPost.nodes
  const habits = habitResult.data.allContentfulHabit.nodes
  const mentors = mentorResult.data.allContentfulMentor.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }

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

  // Create mentor posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (mentors.length > 0) {
    mentors.forEach((mentor, index) => {
      const previousPostSlug = index === 0 ? null : mentors[index - 1].slug
      const nextPostSlug =
        index === mentors.length - 1 ? null : mentors[index + 1].slug

      createPage({
        path: `/mentors/${mentor.slug}/`,
        component: mentorPost,
        context: {
          slug: mentor.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
}
