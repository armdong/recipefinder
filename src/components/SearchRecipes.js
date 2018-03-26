import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setRecipes } from '../actions'

class SearchRecipes extends Component {
  state = {
    ingredients: '',
    dish: ''
  }

  search = () => {
    const { ingredients, dish } = this.state
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`

    fetch(url, { method: 'GET' })
      .then(res => res.json())
      .then(json => {
        this.props.setRecipes(json.results)
      })
  }

  render() {
    return (
      <Form inline={true}>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>
          {' '}
          <FormControl
            type="text"
            placeholder="garlic, chicken"
            onChange={
              event => this.setState({ ingredients: event.target.value })
            }
          />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {' '}
          <FormControl
            type="text"
            placeholder="adobo"
            onChange={
              event => this.setState({ dish: event.target.value })
            }
          />
        </FormGroup>
        {' '}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setRecipes }, dispatch)

export default connect(null, mapDispatchToProps)(SearchRecipes)