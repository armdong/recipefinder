import React, { Component } from 'react'
import { connect } from 'react-redux'
import { favoriteRecipe } from '../actions'

class RecipeItem extends Component {
  state = {
    favorited: false
  }

  favorite = (recipe) => {
    this.props.favoriteRecipe(recipe)
    this.setState(prevState => ({
      favorited: true
    }))
  }

  render() {
    const { recipe, favoriteButton } = this.props
    const { title, href, ingredients, thumbnail } = recipe
    const { favorited } = this.state

    return (
      <div className="recipe-item">
        {favoriteButton === true
          ? favorited === false
            ? (
              <div
                className="star"
                onClick={() => this.favorite(recipe)}
              >
                &#9734;
              </div>
            )
            : (
              <div className="star">
                &#9733;
              </div>
            )
          : <div></div>
        }
        <div className="recipe-text">
          <a href={href}>
            <h4>{title}</h4>
          </a>
          <p>{ingredients}</p>
        </div>
        <img
          className="recipe-img"
          src={thumbnail}
          alt={title}
        />
      </div>
    )
  }
}

export default connect(null, { favoriteRecipe })(RecipeItem)