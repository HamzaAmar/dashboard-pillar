import { SettingsLayout } from '@components/section'
import { Paper } from '@pillar-ui/core'
import { Outlet } from 'react-router-dom'

export const Component = () => {
  return (
    <Paper flow="5">
      <SettingsLayout />
      {<Outlet />}
    </Paper>
  )
}

Component.displayName = 'SettingsLayout Page'
