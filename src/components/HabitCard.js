import React from "react"
import { Link } from "gatsby"
import Icon from "./Icon"

import "./HabitCard.scss"

const HabitCard = ({ habit }) => {
  if (!habit) return null

  // const habitIcon = habit.category.[0].icon.svg.content

  console.log("my habits", habit)

  const habitCategoryIcon = () => {
    if (habit.category) {
      return (
        <Icon
          svg={habit.category[0].icon.svg}
          size={30}
          color="color-accent-1"
        />
      )
    }
    return
  }

  const habitCategory = () => {
    if (habit.category) {
      return habit.category.map((category) => {
        return (
          <div className="tag" key={category.name}>
            {category.name}
          </div>
        )
      })
    }
    return
  }

  return (
    <div className="card habit-card">
      {habitCategoryIcon()}
      <div className="header">
        <Link key={habit.slug} to={`/habits/${habit.slug}`} className="link">
          <h2 className="title">{habit.name}</h2>
        </Link>
        <div className="tags">{habitCategory()}</div>
      </div>

      <div className="content">
        <div
          className="description"
          dangerouslySetInnerHTML={{
            __html: habit.description.childMarkdownRemark.html,
          }}
        />
      </div>
    </div>
  )
}

export default HabitCard
