import React, { Component } from 'react'
import './App.css'

class App extends Component {
  foo() {
    return 'boo'
  }

  render() {
    const name = 'josh mu'
    const loading = false
    const showName = true
    return (
      <div className="App">
        {loading ? <h4>loading...</h4> : <h1>hello {showName && name}</h1>}
      </div>
    )
  }
}

export default App
