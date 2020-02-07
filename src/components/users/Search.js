import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const [text, setText] = useState('')

  const githubContext = useContext(GithubContext)
  const { searchUsers, clearUsers, users } = githubContext
  const alertContext = useContext(AlertContext)
  const { setAlert } = alertContext

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

export default Search
