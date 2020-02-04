import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class User extends Component {
  componentDidMount = () => {
    this.props.getUser(this.props.match.params.login)
  }
  render() {
    const {
      name,
      login,
      avatar_url,
      html_url,
      location,
      blog,
      bio,
      public_repos,
      followers,
      following
    } = this.props.user
    return <div>{name}</div>
  }
}

export default User
