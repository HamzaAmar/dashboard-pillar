import { useId } from 'react'
import { getUsers } from '@api/user'
import { USERS_LIST } from '@api/user/users.data'
import { Avatar, AvatarGroup, Button, Flex, Heading, Paper, Text } from '@pillar-ui/core'
import { Camera } from '@components/icons'
import { NavLink } from 'react-router-dom'

const user = USERS_LIST[0]

const SectionItem = ({ title, to }: any) => {
  return (
    <li>
      <Heading id={`title--${useId()}`}>
        <Button as={NavLink} to={to} variant="text" className="section-item--button">
          {title}
        </Button>
      </Heading>
    </li>
  )
}

const friends = getUsers({ pageSize: 8 })

const hero = () => {
  const { avatar, name, role } = user
  return (
    <section className="hero">
      <div className="hero-image--wrapper">
        <img className="hero--image" src="/images/hero.jfif" alt="" />
        <Button className="hero-image--button" color="b" variant="outline" icon={<Camera width={20} />}>
          Edit Cover Image
        </Button>
      </div>

      <Paper flow="4" className="hero--content">
        <Flex gap="4" className="hero--avatar-wrapper">
          <Avatar size="8" src={avatar} title={name} />
          <div className="u_leading--sm">
            <Heading as="h1" size="4" weight="5">
              {name}
            </Heading>
            <Text>{role}</Text>
            <AvatarGroup size="4">
              {friends.map(({ slug, avatar, name }) => (
                <Avatar src={avatar} key={slug} title={name} />
              ))}
            </AvatarGroup>
          </div>
        </Flex>

        <nav className="hero--navigation">
          <Flex gap="4" as="ul" className="hero--list">
            <SectionItem to="feed" title="Feed" />
            <SectionItem to="about" title="About" />
            <SectionItem to="friends" title="Friends" />
            <SectionItem to="photos" title="Photos" />
          </Flex>
        </nav>
      </Paper>
    </section>
  )
}
export default hero
