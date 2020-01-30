import React, { Component } from 'react'
import propTypes from 'prop-types'

class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }
  static propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired
  }

  render() {
    return (
      <h1>
        <i className={this.props.icon}></i> {this.props.title}
      </h1>
    )
  }
}

export default Navbar
