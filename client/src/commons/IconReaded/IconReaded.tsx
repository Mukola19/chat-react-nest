import React from 'react'
import readedSvg from '../../assets/img/readed.svg'
import noReadedSvg from '../../assets/img/noreaded.svg'

type TypeProps = {
  isMe: boolean
  isReaded: boolean
}

export const IconReaded: React.FC<TypeProps> = ({
  isMe,
  isReaded,
}) =>
  (isMe &&
    (isReaded ? (
      <img className="message__icon-readed" src={readedSvg} alt="Readed icon" />
    ) : (
      <img
        className="message__icon-readed message__icon-readed--no"
        src={noReadedSvg}
        alt="No readed icon"
      />
    ))) ||
  null
