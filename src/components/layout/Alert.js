import React from 'react'

export const Alert = ({ alert }) => {
  return (
    alert && (
      <div className={`btn btn-block btn-${alert.type}`}>
        <i className="fas fa-info-circle"></i> {alert.msg}
      </div>
    )
  )
}

export default Alert
