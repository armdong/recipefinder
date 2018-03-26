import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import App from './components/App'
import FavoriteRecipeList from './components/FavoriteRecipeList'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/favorites" component={FavoriteRecipeList} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)