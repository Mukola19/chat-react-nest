import React from 'react'
import generateAvatarFromHash from '../../utils/helpers/generateAvatarFromHash'
import './Avatar.scss'

type TypeProps = {
  user: any
}

export const Avatar: React.FC<TypeProps> = ({ user }) => {
  if (user.photoUrl) {
    return (
      <img
        className="avatar"
        src={user.photoUrl}
        alt={`Avatar ${user.fullName}`}
      />
    )
  } else {
    const { color, colorLighten } = generateAvatarFromHash(user.id)
    const firstChar = user.fullName[0].toUpperCase()
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
        }}
        className="avatar avatar--symbol"
      >
        {firstChar}
      </div>
    )
  }
}
