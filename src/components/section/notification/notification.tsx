import { Avatar, Badge, Chips, Flex, Heading, IconButton, Paper, Text } from '@pillar-ui/core'
import { Dots } from '@components/icons'
import { classnames } from '@utils/classnames'
import { getNotifications } from '@api/notifacation'
import { NotificationDTO } from '@api/notifacation/notification'

const NotificationCard = ({ user, unread, request, type, description, ...rest }: NotificationDTO) => {
  const NotificationItemClassname = classnames('notifications-item', {
    highlight: unread,
  })

  return (
    <Flex as="article" {...NotificationItemClassname} items="center" justify="between">
      <Flex gap="4" items="center">
        <Avatar title="hello" src={user.avatar} />
        <Paper flow="3">
          <div>
            <Heading as="h2" truncate="1" size="1" weight="5">
              {user.name}
            </Heading>
            <Text size="3" truncate="2">
              {description}
            </Text>
            <Text size="3" color="b" low>
              5min
            </Text>
          </div>
          <Flex gap="4">
            <Chips>{type}</Chips>
            <Chips variant="soft">{request}</Chips>
          </Flex>
        </Paper>
      </Flex>
      <Flex gap="3" items="center">
        {unread && <Badge className="notification-badge" type="dot" />}
        <IconButton title="notification settings" icon={<Dots />} />
      </Flex>
    </Flex>
  )
}

const notification = () => {
  const notifications = getNotifications()
  return (
    <Paper flow="5" as="section" aria-labelledby="notification-page-id">
      <Heading id="notification-page-id" as="h1" size="4">
        All Notification
      </Heading>
      <div className="notifications l_box">
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} {...notification} />
        ))}
      </div>
    </Paper>
  )
}

export default notification
