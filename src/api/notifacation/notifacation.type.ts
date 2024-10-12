import { UserModel } from '../user/user.type'

export type UserNotificationInfo = Pick<UserModel, 'name' | 'avatar'>

export type RequestNotificationTypes =
  | 'friend'
  | 'accept'
  | 'birthday'
  | 'add'
  | 'delete'
  | 'modify'
  | 'new Job'
  | 'join'
  | 'suggest'
  | 'like'
  | 'comments'
  | 'know'

export interface NotificationModelType {
  id: string
  user: UserNotificationInfo
  type: 'friends' | 'pages' | 'events' | 'groups'
  request: RequestNotificationTypes
  unread: boolean
  date: Date
  description: string
}
