import React from 'react'
import classNames from 'classnames'
import './Block.scss'

type TypeProps = {
  children?: React.ReactNode
  className?: string
}

export const Block: React.FC<TypeProps> = ({ children, className }) => (
  <div className={classNames('block', className)}>{children}</div>
)
