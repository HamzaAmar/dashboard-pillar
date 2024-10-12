import { getGroupInboxUnread, getInbox } from '@api/inbox'
import { Inbox, InboxLayout } from '@components/section'
import { LoaderFunction } from 'react-router-dom'

export const InboxLayoutLoader: LoaderFunction = ({ params }) => {
  return getGroupInboxUnread()
}

export const loader: LoaderFunction = async ({ params }) => {
  const type = params.type

  const inboxes = type === 'inbox' ? getInbox() : getInbox().filter((inbox) => inbox.type === type)

  return inboxes
}

export const InboxComponentLayout = () => {
  return <InboxLayout />
}

export const Component = () => {
  return <Inbox />
}

Component.displayName = 'Inbox page'
