import { InboxTypeProps } from '@api/inbox/message.type'
import { Badge, Button, Flex, Grid, IconButton, Text } from '@components/core'
import { ArrowDown, CirclePlus } from '@components/icons'
import useBoolean from '@hooks/useBoolean'
import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import { INBOX_NAV } from './inbox.data'
import { InboxNavItemProps } from './inbox.type'

const InboxNavItem = ({ title, href, children, icon, handleTrue }: InboxNavItemProps) => {
  return (
    <li className="inbox-nav--item">
      <Flex as={NavLink} justify="between" className="inbox-nav--item-link" to={href} onClick={handleTrue}>
        <Flex gap="sm" items="center">
          {icon}
          <Text size="sm" weight="medium">
            {title}
          </Text>
        </Flex>

        {children && children}
      </Flex>
    </li>
  )
}
export const InboxLayout = () => {
  const data = useLoaderData() as InboxTypeProps
  const { state: open, handleTrue, handleFalse } = useBoolean()

  return (
    <Grid columns="250px 1fr" className="inbox chat-inbox l_box">
      <nav
        id="inbox-navigation"
        aria-label="inbox navigation"
        className="inbox-nav  chat-inbox--sidebar l_flow-md"
        data-open={!open}
      >
        <div className="inbox-compose">
          <Button variant="soft" size="lg" fluid icon={<CirclePlus width={20} />}>
            Compose
          </Button>
        </div>
        <ul className="inbox-list">
          {INBOX_NAV.map(({ icon, id, title, href }) => {
            return (
              <InboxNavItem key={id} icon={icon} title={title} href={href} handleTrue={handleTrue}>
                {data[href] && <Badge variant="number" max={10} number={data[href]} size="sm" color="slate" />}
              </InboxNavItem>
            )
          })}
        </ul>
      </nav>
      <div className="inbox inbox-content chat-inbox--content" data-open={open}>
        <div className="back--button">
          <IconButton onClick={handleFalse} icon={<ArrowDown direction="left" />} title="get Back" />
        </div>
        <Outlet />
      </div>
    </Grid>
  )
}
