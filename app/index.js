// import b from 'bootstrap-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'


import rootReducer from './rootReducer'
import App from './components/App'
import * as actionCreators from './actions'

$('body').html(`<div id="app"></div>`)

let store = createStore(rootReducer)

function mapStateToProps(state) {
  return {
    selector: state.selector
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
    <App />,
    document.getElementById('app')
)