import { getUsers } from '@api/user'
import { Avatar, Badge, Breadcrumb, BreadcrumbItem, Flex, Grid, Heading, Paper, Text } from '@pillar-ui/core'
import { Check } from '@components/icons'
import useBoolean from '@hooks/useBoolean'
import { useId } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { ChatCardProps } from './chat.type'

const ChatCard = ({ user, handleTrue }: ChatCardProps) => {
  const chatId = `chat-${useId()}-card`
  return (
    <li>
      <article aria-labelledby={chatId} className="chat--card">
        <Flex className="char-card--link-wrapper" as={NavLink} replace onClick={handleTrue} gap="4" to={user.slug}>
          <header>
            <Avatar src={user.avatar} title={user.name} />
          </header>
          <div>
            <Flex justify="between" items="center" gap="3">
              <Heading id={chatId} color="b" weight="5" size="3" as="h2">
                {user.name}
              </Heading>
              <Flex gap="1">
                <Check width="16" stroke="var(--P11)" />
                <Text className="u_flex-none" size="1" color="b" low>
                  12.30 PM
                </Text>
              </Flex>
            </Flex>
            <Flex items="end">
              <Text size="3" color="b" low truncate="2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error velit sint nostrum obcaecati ducimus, est
                provident ipsa! Provident ratione soluta beatae quam voluptates laudantium rerum quibusdam recusandae
                aspernatur necessitatibus! Aliquam!
              </Text>
              <Badge style={{ flex: 'none' }} size="3" type="numeric" max={15} number={10} />
            </Flex>
          </div>
        </Flex>
      </article>
    </li>
  )
}

const ChatLayout = () => {
  const users = getUsers()
  const { state: open, handleTrue, handleFalse } = useBoolean()

  return (
    <Paper as="section" flow="5" aria-labelledby="chat--page-id">
      <Flex items="center" justify="between">
        <Heading as="h1" id="chat--page-id" size="7">
          Let's Chat
        </Heading>
        <Breadcrumb>
          <BreadcrumbItem href="../../">Home</BreadcrumbItem>
          <BreadcrumbItem href="../..">Pages</BreadcrumbItem>
          <BreadcrumbItem href="./" current>
            Chat
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid cols={{ default: '300px 1fr' }} className="chat chat-inbox">
        <section className="chat--sidebar chat-inbox--sidebar" data-open={!open}>
          <header></header>
          <nav>
            <ul>
              {users.map((user) => (
                <ChatCard key={user.slug} user={user} handleTrue={handleTrue} />
              ))}
            </ul>
          </nav>
        </section>
        <Outlet context={{ open, handleFalse }} />
      </Grid>
    </Paper>
  )
}

export default ChatLayout
