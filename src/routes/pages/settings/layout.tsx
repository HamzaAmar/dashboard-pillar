import { SettingsLayout } from '@components/section'
import { Outlet } from 'react-router-dom'

export const Component = () => {
  return (
    <div className="l_flow-md">
      <SettingsLayout />
      {<Outlet />}
    </div>
  )
}

Component.displayName = 'SettingsLayout Page'
