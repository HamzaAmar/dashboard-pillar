import {
  Help,
  Clock,
  ThumbUp,
  Message,
  Star,
  Trash,
  Send,
  Mailbox,
  Database,
  CircleWarning,
  Messages,
  Media,
  Tags,
} from '@pillar-ui/icons'
import { InboxNavType } from './inbox.type'

export const INBOX_NAV: InboxNavType[] = [
  { id: 'inbox', title: 'Inbox', href: 'inbox', icon: <Mailbox width="16" /> },
  { id: 'send', title: 'Send', href: 'send', icon: <Send width="16" /> },
  { id: 'Draft', title: 'Draft', href: 'draft', icon: <Database width="16" /> },
  {
    id: 'starred',
    title: 'Starred',
    href: 'starred',
    icon: <Star width="16" />,
  },
  {
    id: 'spam',
    title: 'Spam',
    href: 'spam',
    icon: <CircleWarning type="octagon" width="16" />,
  },
  { id: 'trash', title: 'Trash', href: 'trash', icon: <Trash width="16" /> },
  {
    id: 'important',
    title: 'Important',
    href: 'important',
    icon: <ThumbUp width="16" />,
  },
  {
    id: 'snoozed',
    title: 'Snoozed',
    href: 'snoozed',
    icon: <Clock width="16" />,
  },
]

export const MAIL_TYPE = [
  { icon: <Mailbox width="16" />, title: 'Primary' },
  { icon: <Tags width="16" />, title: 'Promotion' },
  { icon: <Media width="16" />, title: 'Social' },
  { icon: <Messages width="16" />, title: 'Forums' },
]
