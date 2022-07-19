import { orderBy } from 'lodash'
import React from 'react'
import { DialogItem } from '../DialogItem/DialogItem'
import './Dialogs.scss'

// type TypeProps = {
//   items: ItemsType[]
//   userId: string
//   currentDialogId: string
// }

// type ItemsType = {
//   id: string
//   text: string
//   isReaded: boolean
//   created_at: string
//   partner: PartnerType
// }

// type PartnerType = {
//   id: string
//   fullName: string
//   photoUrl: string
// }

type TypeProps = {
  [s: string]: any
}

export const Dialogs: React.FC<TypeProps> = ({
  items,
  userId,
  currentDialogId,
}) => {
  return (
    <div className="dialogs">
      {orderBy(items, ['created_at'], ['desc']).map((item) => (
        <DialogItem
          key={item.id}
          isMe={item.author.id === userId}
          userId={userId}
          currentDialogId={currentDialogId}
          {...item}
        />
      ))}
    </div>
  )
}
