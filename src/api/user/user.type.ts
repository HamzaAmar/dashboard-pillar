type Contact = Record<string, string>

export interface UserModel {
  slug: string
  name: string
  avatar: string
  description: string
  role: string
  followers: 21233
  following: 1500
  address: string
  skills: string[]
  Suggestions: string[]
  project: string[]
  contact: Contact
  phone: string
  email: string
  state?: 'online' | 'offline'
}

export type UserInfoNameAvatar = Pick<UserModel, 'name' | 'avatar' | 'slug'>
