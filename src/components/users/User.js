import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'

export class User extends Component {
  componentDidMount = () => {
    this.props.getUser(this.props.match.params.login)
  }
  static propTypes = {
    loading: PropTypes.bool,
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }
  render() {
    const {
      name,
      hireable,
      login,
      avatar_url,
      html_url,
      location,
      company,
      blog,
      bio,
      public_repos,
      public_gists,
      followers,
      following
    } = this.props.user

    const { loading } = this.props

    if (loading) return <Spinner></Spinner>

    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className="fas fa-check text-success"></i>
        ) : (
          <i className="fas fa-times-circle text-danger"></i>
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt="avatar_url"
              className="round-img"
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              {login && (
                <li>
                  <strong>Username: </strong>
                  {login}
                </li>
              )}
              {company && (
                <li>
                  <strong>Company: </strong>
                  {company}
                </li>
              )}
              {blog && (
                <li>
                  <strong>Website: </strong>
                  {blog}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-danger">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
      </Fragment>
    )
  }
}

export default User
