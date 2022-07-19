import React from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import locale from 'date-fns/locale/uk'

type TypeProps = {
  date: Date
}

export const Time: React.FC<TypeProps> = ({ date }) => (
  <>
    {formatDistanceToNow(new Date(date), { addSuffix: true, locale })}
  </>
)
