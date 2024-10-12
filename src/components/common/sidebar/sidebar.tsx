import { Flex, IconButton, Text } from '@components/core'
import * as Icons from '@components/icons'
import { forwardRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '..'
import type { ForwardRefComponent } from '@type/polymorphic.type'
import type { SidebarItemProps } from './sidebar.type'
import { useState } from 'react'
import { Drawer } from '@components/composition'
import { SIDEBAR_CONTENT } from './sidebar.data'

/*
 ======================================================================================================
  Sidebar Item Section
 ======================================================================================================
*/

export const SidebarItem = forwardRef(({ isShrink, children, title, icon, as: Tag = 'button', open, ...rest }, ref) => {
  const current = open ? { 'data-current': 'page' } : {}

  return (
    <li className="sidebar--nav-item" data-type={isShrink ? 'shrink' : 'regular'} {...current}>
      <Flex as={Tag} items="center" className="sidebar--nav-button" gap="sm" ref={ref} {...rest}>
        <span className="u_flex-none" data-nested={Boolean(children) ? true : false}>
          {icon}
        </span>

        <Flex className="sidebar--nav-item-content  u_flex-1" items="center" justify="between">
          <Text weight="medium" size="xs">
            {title}
          </Text>
          {children && <Icons.ChevronDown width="20" />}
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
  Sidebar Section
 ======================================================================================================
*/

// TODO:
// ------ 1) - Set Open the item in hard Reload in page

export const Sidebar = ({ isShrink }: any) => {
  const [open, setOpen] = useState<string | null>(null)

  const openItem = (title: string) => {
    const opened = open === title
    return opened
  }

  const handleOpen = (title: string) => () => {
    setOpen((open) => (open === title ? null : title))
  }

  return (
    <aside className="sidebar" data-shrink={isShrink}>
      <nav className="sidebar--nav">
        <Flex
          as={Link}
          to="/"
          justify="center"
          items="center"
          aria-label="Logo navigation sidebar"
          className="sidebar--header"
        >
          <Logo width={100} isShrink={isShrink} />
        </Flex>
        <ul className="sidebar--list">
          {SIDEBAR_CONTENT.map(({ id, title, icon, to, children }) => {
            // TODO: Figure a good type for this
            const obj = to ? ({ to, as: NavLink } as any) : { open: openItem(title), onClick: handleOpen(title) }
            return (
              <SidebarItem key={id} isShrink={isShrink} icon={icon} title={title} {...obj}>
                {children?.map(({ id, title, icon, to }) => (
                  <SidebarItem as={NavLink} key={id} to={to} icon={icon} title={title} />
                ))}
              </SidebarItem>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export const SidebarDrawer = () => {
  const [open, setOpen] = useState<string | null>(null)

  const openItem = (title: string) => {
    const opened = open === title
    return opened
  }
  const drawerTriggerLabel = open ? 'Close Sidebar' : 'Open Sidebar'

  const handleOpen = (title: string) => () => {
    setOpen((open) => (open === title ? null : title))
  }
  return (
    <Drawer
      title={
        <Flex
          as={Link}
          to="/sss"
          justify="center"
          items="center"
          className="sidebar--header"
          aria-label="Logo navigation sidebar"
        >
          <Logo width={100} />
        </Flex>
      }
      size="sm"
      position="left"
      trigger={<IconButton className="drawer--sidebar" icon={<Icons.Menu />} title={drawerTriggerLabel} />}
    >
      <nav className="sidebar--nav">
        <ul className="sidebar--list">
          {SIDEBAR_CONTENT.map(({ id, title, icon, to, children }) => {
            const obj = to ? ({ to, as: NavLink } as any) : { open: openItem(title), onClick: handleOpen(title) }
            return (
              <SidebarItem key={id} icon={icon} title={title} {...obj}>
                {children?.map(({ id, title, icon, to }) => (
                  <SidebarItem as={NavLink} key={id} to={to} icon={icon} title={title} />
                ))}
              </SidebarItem>
            )
          })}
        </ul>
      </nav>
    </Drawer>
  )
}