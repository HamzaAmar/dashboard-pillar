import { MessagesByUserType } from '@api/messages/message.type'
import { USERS_LIST } from '@api/user/users.data'
import { Avatar, Flex, IconButton, Input, Text } from '@pillar-ui/core'
import { ArrowDown, Dots, Face, Phone, Search, Send } from '@components/icons'
import { useLoaderData, useNavigate, useOutletContext } from 'react-router-dom'
import { EmptyChat } from '.'

const me = USERS_LIST[0]

export const Chat = () => {
  const { messages, user } = useLoaderData() as MessagesByUserType
  const navigate = useNavigate()
  const { open, handleFalse } = useOutletContext<{
    open: true
    handleFalse: () => void
  }>()
  function handleBack() {
    navigate('..', { replace: true })
    handleFalse()
  }

  return (
    <section className="chat--content chat-inbox--content" data-open={open}>
      <Flex className="chat--content--header" as="header" justify="between" items="center">
        <Flex gap="4" items="center">
          <div className="back--button">
            <IconButton onClick={handleBack} icon={<ArrowDown direction="left" />} title="Go Back" />
          </div>
          <Avatar src={user.avatar} title={user.name} size="4" />
          <div>
            <Text weight="5" size="4">
              {user.name}
            </Text>
            <Text size="3" color="b" low>
              last seen a long time ago
            </Text>
          </div>
        </Flex>
        <Flex gap="3">
          <IconButton size="4" icon={<Dots />} title="More actions" />
          <IconButton size="4" icon={<Search />} title="Search in this chat" />
          <IconButton size="4" icon={<Phone />} title="Call" />
        </Flex>
      </Flex>
      <div className="chat--content--main">
        {messages.length ? (
          <Flex direction="col" gap="5" className="chat-content--list">
            {messages.map(({ id, from, message }) => {
              const sender = me.slug === from.slug ? 'owner' : 'sender'

              return (
                <div className="chat-content--item" data-variant={sender} key={id}>
                  <Text size="3">{message}</Text>
                </div>
              )
            })}
          </Flex>
        ) : (
          <EmptyChat.Chat />
        )}
      </div>
      <Flex gap="4" className="chat--content--footer" as="footer" items="center">
        <IconButton icon={<Face />} title="More actions" />
        <Input placeholder="type your message" fluid />
        <IconButton variant="solid" corner="full" icon={<Send />} title="Send Message" />
      </Flex>
    </section>
  )
}
