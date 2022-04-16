/**
 * Add a counter to each category
 * @param {Array.<Object>} habits
 * @param {Array.<Object>} categories
 * @return {Array.<Object>}
 */
const addCategoryCounter = (habits, categories) => {
  // count how many habits there are in each category and add that to a new object
  // the new object properties are the categories
  const categoryCoutner = {}
  habits.forEach((habit) => {
    habit.category.forEach((category) => {
      if (categoryCoutner[category.name]) {
        categoryCoutner[category.name] = categoryCoutner[category.name] + 1
      } else {
        categoryCoutner[category.name] = 1
      }
    })
  })

  // add count property and value to each category
  categories.forEach((category) => {
    category.count = categoryCoutner[category.name]
      ? categoryCoutner[category.name]
      : 0
  })

  // sort categories alphabetically by name
  categories.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })

  return categories
}

export default addCategoryCounter
