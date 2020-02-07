import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../components/context/github/githubContext'

const Search = ({ setAlert }) => {
  const [text, setText] = useState('')
  const githubContext = useContext(GithubContext)
  const { searchUsers, clearUsers, users } = githubContext

  const onChange = e => {
    setText(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please add something.', 'light')
    } else {
      searchUsers(text)
    }
  }

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          className="form"
          placeholder="Search User..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" className="btn btn-dark btn-block" />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  )
}

Search.propTypes = {
  setAlert: PropTypes.func.isRequired
}

export default Search
