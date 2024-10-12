import { getMessageByUser } from '@api/messages'
import { getUserBySlug } from '@api/user'
import { Chat, ChatLayout } from '@components/section'
import { LoaderFunction } from 'react-router-dom'

export const layoutLoader: LoaderFunction = ({ params }) => {
  const user = params.user
  const currentUser = getUserBySlug(user!)
  return {
    user: currentUser,
  }
}

export const loader: LoaderFunction = ({ params }) => {
  if (!params.user) {
    throw Error('User Obligatory')
  }
  return getMessageByUser(params.user)
}

export const ComponentLayout = () => {
  return <ChatLayout />
}

export const Component = () => {
  return <Chat />
}

Component.displayName = 'Chat Page'
