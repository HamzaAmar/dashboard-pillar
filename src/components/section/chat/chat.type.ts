import { UserModel } from '@api/user/user.type'

export interface ChatCardProps {
  user: UserModel
  handleTrue: () => void
}
