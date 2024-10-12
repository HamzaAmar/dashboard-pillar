import { ForgetPassword } from '@components/section'
import type { ActionFunction } from 'react-router-dom'

export const action: ActionFunction = () => {
  return { success: true, message: 'Welcome' }
}

export const Component = () => {
  return <ForgetPassword />
}

Component.displayName = 'ForgetPassword Page'
