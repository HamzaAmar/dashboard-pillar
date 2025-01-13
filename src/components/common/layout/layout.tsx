import useBoolean from '@hooks/useBoolean'
import { Outlet } from 'react-router-dom'
import { Header, Footer, Sidebar } from '..'
import type { SidebarVariantType } from './layout.type'

const Layout = () => {
  const { state: isShrink, handleToggle } = useBoolean(false)

  const variant: SidebarVariantType = isShrink === true ? 'shrink' : 'regular'

  return (
    <div className={`admin-layout admin-layout__variant-${variant}`}>
      <Header isShrink={isShrink} handleToggle={handleToggle} />
      <Sidebar isShrink={isShrink} />

      <main className="main">{<Outlet />}</main>
      <Footer />
    </div>
  )
}

export default Layout
