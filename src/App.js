import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import './App.css'
import axios from 'axios'

class App extends Component {
  state = {
    users: [],
    loading: true
  }

  async componentDidMount() {
    const res = await axios.get('https://api.github.com/users')
    this.setState({ users: res.data, loading: false })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar bg-primary">
          <Navbar />
        </nav>
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    )
  }
}

export default App
