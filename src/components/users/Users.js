import React, { useContext } from 'react'
import UserItem from './UserItem'
import { Spinner } from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'

const Users = () => {
  const githubContext = useContext(GithubContext)
  const { users, loading } = githubContext

  if (loading) {
    return <Spinner></Spinner>
  } else {
    return (
      <div style={userStyle} className="grid-4">
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  // gridTemplateColumns: 'repeat(3, 1fr)', // bringing this in via class instead
  gridGap: '1rem'
}

export default Users
