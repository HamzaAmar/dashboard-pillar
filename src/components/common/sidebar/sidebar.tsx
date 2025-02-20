import { Flex, IconButton, Text } from '@pillar-ui/core'
import * as Icons from '@pillar-ui/icons'
import { Children, forwardRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '..'
import type { ForwardRefComponent } from '@type/polymorphic.type'
import type { SidebarItemProps } from './sidebar.type'
import { Drawer } from '@components/composition'
import { SIDEBAR_CONTENT } from './sidebar.data'
import { useOpen } from './useOpen'

/*
 ======================================================================================================
  Sidebar Item Section
 ======================================================================================================
*/

export const SidebarItem = forwardRef(({ isShrink, children, title, icon, as: Tag = 'button', open, ...rest }, ref) => {
  const current = open ? { 'data-current': 'page' } : {}
  const IS_NESTED = Children.count(children) > 0

  return (
    <li className="sidebar--nav-item" data-type={isShrink ? 'shrink' : 'regular'} {...current}>
      <Flex as={Tag} items="center" className="sidebar--nav-button" gap="4" ref={ref} {...rest}>
        <span className="u_flex-none" data-nested={IS_NESTED}>
          {icon}
        </span>

        <Flex className="sidebar--nav-item-content fl-1" items="center" justify="between">
          <Text weight="5" size="3">
            {title}
          </Text>
          {children && <Icons.ChevronDown width="16" />}
        </Flex>
      </Flex>
      {children && (
        <ul data-visible={open} {...current} className="sidebar-item--nested-list">
          {children}
        </ul>
      )}
    </li>
  )
}) as ForwardRefComponent<'button', SidebarItemProps>

/*
 ======================================================================================================
  Sidebar Desktop and above Section
 ======================================================================================================
*/

export const Sidebar = ({ isShrink }: { isShrink?: boolean }) => {
  const { handleOpen, isOpen } = useOpen()

  return (
    <aside className="sidebar" data-shrink={isShrink}>
      <nav className="sidebar--nav">
        <Flex
          as={Link}
          to="/dashboard/ecommerce"
          justify="center"
          items="center"
          aria-label="Logo navigation sidebar"
          className="sidebar--header"
        >
          <Logo width={100} isShrink={isShrink} />
        </Flex>
        <ul className="hover-scrollbar sidebar--list">
          {SIDEBAR_CONTENT.map(({ id, title, icon, to, children }) => {
            const obj = to ? ({ to, as: NavLink } as any) : { open: isOpen(id), onClick: handleOpen(id) }
            return (
              <SidebarItem key={id} isShrink={isShrink} icon={icon} title={title} {...obj}>
                {children?.map(({ id, title, icon, to }) => (
                  <SidebarItem as={NavLink} key={id} to={to ?? ''} icon={icon} title={title} />
                ))}
              </SidebarItem>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

/*
 ======================================================================================================
  Sidebar Mobile Section
 ======================================================================================================
*/

export const SidebarDrawer = () => {
  const { handleOpen, isOpen, open } = useOpen()
  const TRIGGER_LABEL = open ? 'Close Sidebar' : 'Open Sidebar'

  return (
    <Drawer
      title={
        <Flex
          as={Link}
          to="/dashboard/ecommerce"
          justify="center"
          items="center"
          className="sidebar--header"
          aria-label="Logo navigation sidebar"
        >
          <Logo width={100} />
        </Flex>
      }
      size="4"
      position="left"
      trigger={<IconButton className="drawer--sidebar" icon={<Icons.Menu />} title={TRIGGER_LABEL} />}
    >
      <nav className="sidebar--nav">
        <ul className="hover-scrollbar sidebar--list">
          {SIDEBAR_CONTENT.map(({ id, title, icon, to, children }) => {
            const obj = to ? ({ to, as: NavLink } as any) : { open: isOpen(id), onClick: handleOpen(id) }
            return (
              <SidebarItem key={id} icon={icon} title={title} {...obj}>
                {children?.map(({ id, title, icon, to }) => (
                  <SidebarItem as={NavLink} key={id} to={to ?? ''} icon={icon} title={title} />
                ))}
              </SidebarItem>
            )
          })}
        </ul>
      </nav>
    </Drawer>
  )
}
