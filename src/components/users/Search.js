import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../components/context/github/githubContext'

const Search = ({ showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState('')
  const githubContext = useContext(GithubContext)

  const onChange = e => {
    setText(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please add something.', 'light')
    } else {
      githubContext.searchUsers(text)
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
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  )
}

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}

export default Search
