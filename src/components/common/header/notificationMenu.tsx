import { getNotifications } from '@api/notifacation'
import { Bell } from '@pillar-ui/icons'
import { Avatar, Badge, Button, Flex, IconButton, Text } from '@pillar-ui/core'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { getTimeAgo } from '@utils/date'
import { Link } from 'react-router-dom'
import { NOTIFICATION_TYPE } from './header.data'
import { NotificationDTO } from '@api/notifacation/notification'

function NotificationItem({ user, id, date, unread, request }: NotificationDTO) {
  return (
    <DropdownMenu.Item className="menu-button--item" key={id}>
      <Flex justify="between">
        <Flex gap="3">
          <Avatar src={user.avatar} title={user.name} />
          <div>
            <Text
              truncate="2"
              size="4"
              // weight="5"
              dangerouslySetInnerHTML={{
                __html: NOTIFICATION_TYPE[request](user.name),
              }}
            />
            <Text color="p" low size="3">
              {getTimeAgo(date)}
            </Text>
          </div>
        </Flex>
        {unread && (
          <div className="u_flex-none">
            <Badge color="p" type="dot" size="7" />
          </div>
        )}
      </Flex>
    </DropdownMenu.Item>
  )
}

function NotificationMenuButton() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <IconButton variant="text" icon={<Bell />} size="4" title="Notifications" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end" sideOffset={16} asChild>
        <section className="menu-button--container menu-button--sticky">
          <DropdownMenu.Group>
            <DropdownMenu.Item className="menu-button--item">
              <Flex as="header" items="center" justify="between">
                <Text size="4" weight="5">
                  Notification
                </Text>
                <Button size="3" variant="text">
                  Mark as Read
                </Button>
              </Flex>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator className="menu-button--separator" />
          <DropdownMenu.Group className="menu-button--main">
            {getNotifications(15).map((notification) => (
              <NotificationItem {...notification} />
            ))}
          </DropdownMenu.Group>
          <DropdownMenu.Separator className="menu-button--separator" />
          <DropdownMenu.Group>
            <DropdownMenu.Item className="menu-button--item">
              <Button as={Link} to="/pages/notifications" size="4" variant="text" fluid>
                View All
              </Button>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </section>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default NotificationMenuButton
