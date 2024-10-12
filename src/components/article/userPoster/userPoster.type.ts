import { UserModel } from '@api/user/user.type'
import type { ReactNode } from 'react'

type Variant = 'network' | 'event' | 'people' | 'page' | 'newsletter' | 'group'

export interface UserPosterProps {
  children: ReactNode
  variant?: Variant
  user: UserModel
}
