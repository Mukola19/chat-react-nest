import React from 'react'
import cl from 'classnames'
import './Status.scss'

type TypeProps = {
  online: boolean
}

export const Status: React.FC<TypeProps> = ({ online }) => {
  return (
    <span className={cl('status', { ' status--online': online })}>
      {online ? 'онлайн' : 'офлайн'}
    </span>
  )
}
