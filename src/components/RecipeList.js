import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import RecipeItem from './RecipeItem'

class RecipeList extends Component {
  render() {
    return (
      <div>
        {this.props.favoriteRecipes.length > 0 &&
          <h4 className="link"><Link to="/favorites">Favorites</Link></h4>
        }
        {this.props.recipes.map((recipe, index) => (
          <RecipeItem
            recipe={recipe}
            key={index}
            favoriteButton={true}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  favoriteRecipes: state.favoriteRecipes
})

export default connect(mapStateToProps, null)(RecipeList)