import React, { Fragment, Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Search from './components/users/Search'
import Users from './components/users/Users'
import About from './components/pages/About'
import './App.css'
import axios from 'axios'

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  // async componentDidMount() {
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   )
  //   this.setState({ users: res.data, loading: false })
  // }

  // SEARCH USERS FROM GITHUB API
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    this.setState({ users: res.data.items, loading: false })
  }

  // CLEAR USERS LIST RESULTS
  clearUsers = () => this.setState({ users: [], loading: false })

  // SEND ALERT
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => this.setState({ alert: null }), 5000)
  }

  render() {
    const { users, loading } = this.state

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert}></Alert>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={!!users.length}
                      setAlert={this.setAlert}
                    ></Search>
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              ></Route>
              <Route exact path="/about" render={About}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
