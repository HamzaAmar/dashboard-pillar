// import { UserModel } from "@api/users/users.type";
import { UserInfoNameAvatar } from '@api/user/user.type'
// import { ReactionUnion } from "@components/articles/hoverCard/like";
import type { ReactNode } from 'react'

interface Like {
  user: UserInfoNameAvatar
  type: any
}

export interface ReviewModel {
  id: string
  user: UserInfoNameAvatar
  review: string
  date: Date
  rating: number
  likes?: Like[] | null
}

export interface PostModel {
  id: string
  user: UserInfoNameAvatar
  content: ReactNode
  date: Date
  reviews: ReviewModel[] | null
  likes: Like[] | null
}

export interface PostUserModel extends PostModel {}
