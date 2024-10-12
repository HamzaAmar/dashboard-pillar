import { INBOX_LIST } from './inbox.data'
import { InboxTypeProps } from './message.type'

export function getGroupInboxUnread(): InboxTypeProps {
  const obj = {} as InboxTypeProps
  for (let inbox of INBOX_LIST) {
    obj[inbox.type] = inbox.type in obj ? obj[inbox.type] + 1 : 0
  }
  return obj
}

export function getInbox(max?: number) {
  const SortedInbox = INBOX_LIST.sort((a, b) => -(a.date.getTime() - b.date.getTime()))

  return max ? SortedInbox.slice(0, max) : SortedInbox
}
