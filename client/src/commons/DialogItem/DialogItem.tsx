import React from 'react'
import { IconReaded } from '../IconReaded/IconReaded'
import { Time } from '../Time/Time'
import cl from 'classnames'
import { Avatar } from '../Avatar/Avatar'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'

// type TypeProps = {
//   isMe: boolean
//   userId: string
//   currentDialogId: string
//   id: string
//   created_at: string
//   text: string
//   partner: any
//   lastMessage: LastMessageProps
// }

// type LastMessageProps = {
//   userName: string
//   date?: string
//   photoUrl: string
//   text?: string
//   isMe?: boolean
//   attachments?: AttachmentType[]
//   isTyping?: boolean
//   unreaded: number
// }

// type AttachmentType = {
//   url: string
//   filename: string
// }
type TypeProps = {
  [s: string]: any
}

const getMessageTime = (createdAt: string) => {
  const createdAtDate = new Date(createdAt)
  if (isToday(createdAtDate)) {
    return format(createdAtDate, 'hh:mm')
  } else {
    return format(createdAtDate, 'dd.mm.yyyy')
  }
}

const renderLastMessage = (message: any, userId: string) => {
  let text = ''
  if (!message.text && message.attachments.length) {
    text = 'прикріплений файл'
  } else {
    text = message.text
  }

  return `${message.user.id === userId ? 'Ви: ' : ''}${text}`
}

export const DialogItem: React.FC<TypeProps> = (
  {
    isMe,
    userId,
    currentDialogId,
    id,
    created_at,
    partner,
    lastMessage,
  }
) => {
  

  return (
    <div
      className={cl('dialogs__item', {
        'dialogs__item--online': partner.isOnline,
        // 'dialogs__item--selected': currentDialogId === id,
      })}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={partner} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{partner.fullName}</b>
          {getMessageTime(created_at)}
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{renderLastMessage(lastMessage, userId)}</p>
          {isMe && <IconReaded isMe={isMe} isReaded={true} />}
          {lastMessage.unreaded > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {lastMessage.unreaded > 9 ? '+9' : lastMessage.unreaded}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
