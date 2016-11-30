/* eslint-env browser */

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  React.createElement(App), // equal to `<App />`
  document.getElementById('app'),
)
