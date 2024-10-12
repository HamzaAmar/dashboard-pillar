import { Hero } from '@components/section/profile'
import { Outlet } from 'react-router-dom'

export const Component = () => {
  return (
    <div className="l_flow-md">
      <Hero />
      {<Outlet />}
    </div>
  )
}

Component.displayName = 'Profile Page'
