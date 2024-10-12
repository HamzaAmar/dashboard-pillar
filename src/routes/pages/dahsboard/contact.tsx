import { getUsers } from '@api/user'
import { ContactSection } from '@components/section'

import type { LoaderFunction } from 'react-router-dom'

export const loader: LoaderFunction = () => {
  const users = getUsers()
  return { users }
}

export const Component = () => {
  return <ContactSection />
}

Component.displayName = 'Contact Page'
