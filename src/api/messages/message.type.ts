import { UserInfoNameAvatar, UserModel } from '@api/user/user.type'

export interface MessageModelType {
  id: string
  from: UserInfoNameAvatar
  to: string
  message: string
  unread: boolean
  date: Date
}

export interface MessagesByUserType {
  user: UserModel
  messages: MessageModelType[]
}
