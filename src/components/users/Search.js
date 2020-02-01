import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    console.log(e.target.text.value)
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="text"
          className="form"
          placeholder="Search User..."
          value={this.state.text}
          onChange={this.onChange}
        />
        <input type="submit" className="btn btn-dark btn-block" />
      </form>
    )
  }
}

export default Search
