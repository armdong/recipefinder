export const SET_RECIPES = 'SET_RECIPES'
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE'

export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  recipes
})

export const favoriteRecipe = (recipe) => ({
  type: FAVORITE_RECIPE,
  recipe
})