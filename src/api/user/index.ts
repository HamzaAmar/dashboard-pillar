import { GetProductProps } from '@api/ecommerce/products/products.type'
import { getRandomNumber } from '@utils/randomNumber'
import { UserInfoNameAvatar } from './user.type'
import { USERS_LIST } from './users.data'
import { v4 as uuid } from 'uuid'

export function getRandomNameAndAvatarUser() {
  const user = {} as UserInfoNameAvatar
  const RandomUser = getRandomNumber({ max: USERS_LIST.length - 1, min: 1 })
  user.name = USERS_LIST[RandomUser].name
  user.avatar = USERS_LIST[RandomUser].avatar
  user.slug = uuid()
  return user
}

export function usersTotal() {
  return USERS_LIST.length
}

export function getUsers({ current = 1, pageSize = 10 }: GetProductProps = {}) {
  const total = USERS_LIST.length
  const next = current * pageSize
  const from = (current - 1) * pageSize
  const to = next > total ? total : next
  return USERS_LIST.slice(from, to)
}

export function getUserBySlug(slug: string) {
  return USERS_LIST.find((user) => user.slug === slug)
}

export function getUsersById(ids: string[]) {
  const slugObj = ids.reduce<Record<string, string>>((obj, slug) => {
    return { ...obj, [slug]: slug }
  }, {})
  return USERS_LIST.filter((user) => slugObj[user.slug])
}
