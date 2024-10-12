import { Alert, Clock, Crown, Message, Star, Trash } from '@components/icons'
import { InboxNavType } from './inbox.type'

export const INBOX_NAV: InboxNavType[] = [
  { id: 'inbox', title: 'Inbox', href: 'inbox', icon: <Star width="20" /> },
  { id: 'send', title: 'Send', href: 'send', icon: <Message width="20" /> },
  { id: 'Draft', title: 'Draft', href: 'draft', icon: <Star width="20" /> },
  {
    id: 'starred',
    title: 'Starred',
    href: 'starred',
    icon: <Star width="20" />,
  },
  {
    id: 'spam',
    title: 'Spam',
    href: 'spam',
    icon: <Alert type="octagon" width="20" />,
  },
  { id: 'trash', title: 'Trash', href: 'trash', icon: <Trash width="20" /> },
  {
    id: 'important',
    title: 'Important',
    href: 'important',
    icon: <Crown width="20" />,
  },
  {
    id: 'snoozed',
    title: 'Snoozed',
    href: 'snoozed',
    icon: <Clock width="20" />,
  },
]
