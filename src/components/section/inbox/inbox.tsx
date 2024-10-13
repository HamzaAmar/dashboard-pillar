import { InboxModelType } from '@api/inbox/message.type'
import { Avatar, Checkbox, Flex, IconButton, Text } from '@pillar-ui/core'
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
    <Flex as="article" gap="3" className="inbox--item" items="center">
      <Checkbox showLabel label="hello" />

      <IconButton
        size="4"
        onClick={star.handleToggle}
        icon={<Star {...starredStyle} />}
        title={`${star.state ? 'Starred' : 'Not Starred'}`}
      />
      <IconButton
        size="4"
        onClick={important.handleToggle}
        icon={<Crown {...importantStyle} />}
        title={`mark as ${important.state ? 'Unimportant' : 'important'}`}
      />
      <Flex as={Link} items="center" justify="between" className="inbox-item--link" to="hello">
        <Flex gap="3">
          <Avatar image={user.avatar} title={user.name} />
          <div>
            <Text truncate="1" weight="5" size="4">
              {user.name}
            </Text>
            <Text size="4" low color="b" truncate="2">
              {message}
            </Text>
          </div>
        </Flex>
        <Text className="u_flex-none" size="3" low color="b" weight="5">
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
