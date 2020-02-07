import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Search from './components/users/Search'
import Users from './components/users/Users'
import User from './components/users/User'
import About from './components/pages/About'

import GithubState from './components/context/github/GithubState'

import './App.css'

const App = () => {
  const [alert, setAlert] = useState(null)

  // SEND ALERT
  const showAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 5000)
  }

  return (
    <GithubState>
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
                    <Search setAlert={showAlert}></Search>
                    <Users />
                  </Fragment>
                )}
              ></Route>
              <Route exact path="/about" render={About}></Route>
              <Route
                exact
                path="/user/:login"
                render={props => <User {...props}></User>}
              ></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  )
}

export default App
