import { getUsers } from '@api/user'
import { USERS_LIST } from '@api/user/users.data'
import { Avatar, AvatarGroup, Button, Flex, Heading, Paper, Text } from '@pillar-ui/core'
import { Camera } from '@pillar-ui/icons'
import { NavLink } from 'react-router-dom'

const user = USERS_LIST[0]

const SectionItem = ({ title, to }: any) => {
  return (
    <Button as={NavLink} className="hero-nav--item" to={to} variant="text" color="b">
      {title}
    </Button>
  )
}

const friends = getUsers({ pageSize: 8 })

const hero = () => {
  const { avatar, name, role } = user
  return (
    <Paper as="section" flow="5" className="hero">
      <div className="hero-image--wrapper">
        <img className="hero--image" src="/images/hero.jfif" alt="" />
        <Button className="hero-image--button" color="b" variant="solid" icon={<Camera width={20} />}>
          Edit Cover Image
        </Button>
      </div>

      <Paper flow="4">
        <Flex gap="4" items="center">
          <Avatar corner="2" size="9" src={avatar} title={name} />
          <div>
            <Heading as="h1" size="6" weight="5" leading="1">
              {name}
            </Heading>
            <Text size="3" color="b" low>
              {role}
            </Text>
            <AvatarGroup size="1" limit={4}>
              {friends.map(({ slug, avatar, name }) => (
                <Avatar src={avatar} key={slug} title={name} />
              ))}
            </AvatarGroup>
          </div>
        </Flex>

        <Flex gap="4" as="nav" className="hero--navigation">
          <SectionItem to="feed" title="Feed" />
          <SectionItem to="about" title="About" />
          <SectionItem to="friends" title="Friends" />
          <SectionItem to="photos" title="Photos" />
        </Flex>
      </Paper>
    </Paper>
  )
}
export default hero
