import React from 'react'

import './legend.scss'

const DIFFICULT = getComputedStyle(document.documentElement).getPropertyValue(
  '--difficulty-1'
)

const ColorDifficulty = () => {
  console.log('TEST123')
  const colors = []

  for (var i = 1; i <= 5; i++) {
    let color = getComputedStyle(document.documentElement).getPropertyValue(
      '--difficulty-' + i
    )
    colors.push(
      <div className="color-difficulty" style={{ backgroundColor: color }}>
        {i}
      </div>
    )
    console.log('AMAZING', colors)
  }

  return colors
}

const Legend = () => {
  return (
    <div className="legend-wrapper">
      <div className="difficulty-wrapper">{ColorDifficulty()}</div>
      <h6>
        Color coded difficulty
        <br />
        from easiest (1) to hardest (5). <br />
        <br />
        This will be section where I explain things <br />
        It will always be placed at the bottom of the page
      </h6>
    </div>
  )
}

export default Legend
