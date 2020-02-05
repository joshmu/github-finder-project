import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Search from './components/users/Search'
import Users from './components/users/Users'
import User from './components/users/User'
import About from './components/pages/About'
import './App.css'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  // SEARCH USERS FROM GITHUB API
  const searchUsers = async text => {
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    setUsers(res.data.items)
    setLoading(false)
  }

  // GET SINGLE USER FROM GITHUB API
  const getUser = async username => {
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    setUser(res.data)
    setLoading(false)
  }

  // GET SINGLE USER REPOS FROM GITHUB API
  const getUserRepos = async username => {
    setLoading(true)
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    setRepos(res.data)
    setLoading(false)
  }

  // CLEAR USERS LIST RESULTS
  const clearUsers = () => {
    setLoading(false)
    setUsers([])
  }

  // SEND ALERT
  const showAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 5000)
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert}></Alert>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={!!users.length}
                    setAlert={showAlert}
                  ></Search>
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            ></Route>
            <Route exact path="/about" render={About}></Route>
            <Route
              exact
              path="/user/:login"
              render={props => (
                <User
                  {...props}
                  getUser={getUser}
                  user={user}
                  getUserRepos={getUserRepos}
                  repos={repos}
                  loading={loading}
                ></User>
              )}
            ></Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
