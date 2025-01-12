import { Hero } from '@components/section/profile'
import { Paper } from '@pillar-ui/core'
import { Outlet } from 'react-router-dom'

export const Component = () => {
  return (
    <Paper flow="5">
      <Hero />
      {<Outlet />}
    </Paper>
  )
}

Component.displayName = 'Profile Page'
