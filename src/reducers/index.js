import { combineReducers } from 'redux'
import { SET_RECIPES, FAVORITE_RECIPE } from '../actions'

const recipes = (state = [], action) => {
  switch(action.type) {
    case SET_RECIPES:
      return action.recipes
    default:
      return state
  }
}

const favoriteRecipes = (state = [], action) => {
  switch(action.type) {
    case FAVORITE_RECIPE:
      return [...state, action.recipe]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  recipes,
  favoriteRecipes
})

export default rootReducer