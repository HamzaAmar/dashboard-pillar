import { Login } from '@components/section'
import { ActionFunction, redirect } from 'react-router-dom'

export const loginAction: ActionFunction = ({ params, request }) => {
  return redirect('/')
}

export const Component = () => {
  return <Login />
}

Component.displayName = 'Login Page'
