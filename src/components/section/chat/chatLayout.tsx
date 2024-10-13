import { getUsers } from '@api/user'
import { Avatar, Badge, Breadcrumb, BreadcrumbItem, Flex, Grid, Heading, Text } from '@pillar-ui/core'
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
            <Avatar image={user.avatar} title={user.name} />
          </header>
          <div>
            <Flex justify="between" items="center" gap="3">
              <Heading id={chatId} weight="5" size="1" as="h2">
                {user.name}
              </Heading>
              <Flex>
                <Check width={14} stroke="var(--color-purple-3)" />
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
              <Badge size="3" type="numeric" max={15} number={10} />
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
  // let { user } = useParams()
  // useEffect(() => {
  //   if (user && !open) {
  //   }
  // }, [user, handleFalse, open])
  return (
    <section aria-labelledby="chat--page-id" className="l_flow-lg">
      <Flex items="center" justify="between">
        <Heading as="h1" id="chat--page-id" size="3">
          TODO Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Pages</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Chat
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="300px 1fr" className="chat chat-inbox">
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
    </section>
  )
}

export default ChatLayout
