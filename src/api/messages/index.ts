import { getUserBySlug } from '@api/user'
import { USERS_LIST } from '@api/user/users.data'
import { MessagesByUserType } from './message.type'
import { MESSAGES_LIST } from './messages.data'

const me = USERS_LIST[0]

export function getMessageByUser(slug: string): MessagesByUserType {
  const user = getUserBySlug(slug)
  if (!user) {
    // throw Error("User Is Obligatory");
  }
  const messages = MESSAGES_LIST.filter(
    (message) =>
      (message.from.slug === slug && message.to === me.slug) || (message.from.slug === me.slug && message.to === slug)
  )
  const SortedMessages = messages.sort((a, b) => a.date.getTime() - b.date.getTime())
  return {
    user: user!,
    messages: SortedMessages,
  }
}

export function messagesTotal() {
  return MESSAGES_LIST.length
}

export function getMessages(max?: number) {
  const SortedMessages = MESSAGES_LIST.sort((a, b) => -(a.date.getTime() - b.date.getTime()))

  return max ? SortedMessages.slice(0, max) : SortedMessages
}
