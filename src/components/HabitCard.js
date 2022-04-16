import React from "react"
import { Link } from "gatsby"
import Icon from "./Icon"

import "./HabitCard.scss"

const HabitCard = ({ habit }) => {
  if (!habit) return null

  console.log("component/HabitCard ", habit)

  // associate difficulty with a color
  const habitDifficulty = {
    Easy: "difficulty-3",
    Medium: "difficulty-4",
    Hard: "difficulty-5",
  }

  const habitCategoryIcon = () => {
    let iconColor = habitDifficulty["medium"]
    if (habit.difficulty) {
      iconColor = habitDifficulty[habit.difficulty]
    }

    iconColor = "color-accent-1"

    if (habit.category) {
      return (
        <Icon svg={habit.category[0].icon.svg} size={30} color={iconColor} />
      )
    }
    return
  }

  const habitCategory = () => {
    if (habit.category) {
      return habit.category.map((category) => {
        return (
          <Link
            to={`/category/${category.slug}`}
            key={category.slug}
            className="tag"
          >
            {category.name}
          </Link>
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
