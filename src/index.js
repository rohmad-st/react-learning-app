import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'

// import Redux
import { createStore } from 'redux'
import reducers from './store/reducers'

const store = createStore(reducers)

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
