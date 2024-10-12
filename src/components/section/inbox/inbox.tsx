import { InboxModelType } from '@api/inbox/message.type'
import { Avatar, Checkbox, Flex, IconButton, Text } from '@components/core'
import { Crown, Star } from '@components/icons'
import useBoolean from '@hooks/useBoolean'
import { getDateFormat } from '@utils/date'
import { Link, useLoaderData, useParams } from 'react-router-dom'

const InboxItem = ({ message, user, date, type, unread }: Omit<InboxModelType, 'id'>) => {
  const star = useBoolean(false)
  const important = useBoolean(false)

  const starredStyle = star.state || type === 'starred' ? { fill: 'var(--yellow-8)', stroke: 'var(--yellow-8)' } : {}
  const importantStyle = important.state || type === 'important' ? { fill: 'var(--red-8)', stroke: 'var(--red-8)' } : {}

  return (
    <Flex as="article" gap="xs" className="inbox--item" items="center">
      <Checkbox showLabel label="hello" />

      <IconButton
        size="sm"
        onClick={star.handleToggle}
        icon={<Star {...starredStyle} />}
        title={`${star.state ? 'Starred' : 'Not Starred'}`}
      />
      <IconButton
        size="sm"
        onClick={important.handleToggle}
        icon={<Crown {...importantStyle} />}
        title={`mark as ${important.state ? 'Unimportant' : 'important'}`}
      />
      <Flex as={Link} items="center" justify="between" className="inbox-item--link" to="hello">
        <Flex gap="xs">
          <Avatar variant="image" image={user.avatar} title={user.name} />
          <div>
            <Text truncate="multiline" numberLine={1} weight="medium" size="sm">
              {user.name}
            </Text>
            <Text size="sm" contrast="low" color="slate" truncate="multiline" numberLine={2}>
              {message}
            </Text>
          </div>
        </Flex>
        <Text className="u_flex-none" size="xs" contrast="low" color="slate" weight="medium">
          {getDateFormat(date)}
        </Text>
      </Flex>
    </Flex>
  )
}
const Inbox = () => {
  const search = useParams()
  const data = useLoaderData() as InboxModelType[]

  return (
    <section>
      <header>{search.title}</header>
      <div className="inbox--list-item">
        {data.map(({ id, ...rest }) => (
          <InboxItem key={id} {...rest} />
        ))}
      </div>
    </section>
  )
}

export default Inbox
