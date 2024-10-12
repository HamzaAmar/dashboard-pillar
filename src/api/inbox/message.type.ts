import { UserModel } from '../user/user.type'

export type UserMessageInfo = Pick<UserModel, 'name' | 'avatar'>
export type InboxType = 'inbox' | 'spam' | 'send' | 'draft' | 'starred' | 'trash' | 'important' | 'snoozed'

export interface InboxModelType {
  id: string
  user: UserMessageInfo
  message: string
  date: Date
  type: InboxType
  unread: boolean
}

export type InboxTypeProps = Record<InboxType, number>
