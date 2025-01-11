import { InboxModelType } from '@api/inbox/message.type'
import { Crown, Star } from '@components/icons'
import useBoolean from '@hooks/useBoolean'
import { Avatar, Checkbox, Flex, IconButton, Text } from '@pillar-ui/core'
import { getDateFormat } from '@utils/date'
import { Link } from 'react-router-dom'

export const InboxItem = ({ message, user, date, type, unread }: Omit<InboxModelType, 'id'>) => {
  const star = useBoolean(false)
  const important = useBoolean(false)

  const isStarred = star.state || type === 'starred'
  const isImportant = important.state || type === 'important'

  return (
    <Flex as="article" gap="3" className="inbox--item" items="center">
      <Checkbox>
        <Text className="H-sr">hello</Text>
      </Checkbox>

      <IconButton
        size="4"
        color={!isStarred ? 'b' : 'w'}
        className="inbox-item--star"
        data-active={isStarred}
        onClick={star.handleToggle}
        icon={<Star />}
        title={`${star.state ? 'Starred' : 'Not Starred'}`}
      />
      <IconButton
        size="4"
        color={!isImportant ? 'b' : 'd'}
        className="inbox-item--important"
        data-active={isImportant}
        onClick={important.handleToggle}
        icon={<Crown />}
        title={`mark as ${important.state ? 'Unimportant' : 'important'}`}
      />
      <Flex as={Link} items="center" justify="between" gap="4" className="inbox-item--link" to="hello">
        <Flex gap="3">
          <Avatar src={user.avatar} title={user.name} />
          <div>
            <Text truncate="1" weight="5" size="3">
              {user.name}
            </Text>
            <Text size="3" low color="b" truncate="2">
              {message}
            </Text>
          </div>
        </Flex>
        <Text className="fl-none" size="3" low color="b" weight="5">
          {getDateFormat(date)}
        </Text>
      </Flex>
    </Flex>
  )
}
