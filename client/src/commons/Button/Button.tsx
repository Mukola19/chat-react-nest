import React from 'react'
import { Button as BaseButton } from 'antd'
import classNames from 'classnames'
import './Button.scss'

type TypeProps = {
  [k: string]: string
}

export const Button: React.FC<TypeProps> = ({ size, className, ...props }) => (
  <BaseButton
    {...props}
    className={classNames('button', className, {
      ['button_large']: size === 'large',
    })}
  />
)
