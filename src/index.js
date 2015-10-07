import './styles/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import routes from './config/routes'

// Router.run(routes, function(Handler) {
// 	React.render(<Handler />, document.getElementById('app'))
// })

const Root = props => (
  <div>
    <Router>
      { routes }
    </Router>
  </div>
)

ReactDOM.render(<Root />, document.getElementById('app'))
