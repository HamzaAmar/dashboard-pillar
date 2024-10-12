import { Register } from '@components/section'
import type { ActionFunction } from 'react-router-dom'

export const registerAction: ActionFunction = () => {
  return { success: true, message: 'Welcome' }
}

export const Component = () => {
  return <Register />
}

Component.displayName = 'Register Page'
