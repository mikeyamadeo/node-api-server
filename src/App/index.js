import React from 'react'
import Charmander from 'Charmander'

var App = React.createClass({

  getInitialState () {
    return {
      stage: 0
    }
  },

  propTypes: {
    children: React.PropTypes.node
  },

  evolve () {
    const { stage } = this.state

    const nextStage = stage < 2 ? stage + 1 : 0
    this.setState({stage: nextStage})

  },

  render () {

    const { stage } = this.state

    return (
      <div className='wrapper'>
        <header style={{textAlign: 'center'}}>
          <h1><a href='#/'>Pokemon API Server</a></h1>
        </header>
        <div className='view'>
          { this.props.children }
        </div>
        <footer style={{position: 'fixed', left: '0', bottom: '0', width: '100%'}}>
          <div onClick={this.evolve} style={{width: '15em', height: '15em', position: 'relative', margin: '10px auto'}}>
            <Charmander stage={stage} />
          </div>
        </footer>
      </div>
    )
  }
})

export default App
