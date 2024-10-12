import { useId } from 'react'
import { getUsers } from '@api/user'
import { USERS_LIST } from '@api/user/users.data'
import { Avatar, Button, Flex, Heading, Text } from '@components/core'
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
        <Button className="hero-image--button" color="slate" variant="outline" icon={<Camera width={20} />}>
          Edit Cover Image
        </Button>
      </div>

      <div className="hero--content l_flow-md">
        <Flex gap="sm" className="hero--avatar-wrapper">
          <Avatar variant="image" size="2xl" image={avatar} title={name} />
          <div className="u_leading--sm">
            <Heading as="h1" size="sm" weight="medium">
              {name}
            </Heading>
            <Text>{role}</Text>
            <Avatar.Group size="sm">
              {friends.map(({ slug, avatar, name }) => (
                <Avatar variant="image" image={avatar} key={slug} title={name} />
              ))}
            </Avatar.Group>
          </div>
        </Flex>

        <nav className="hero--navigation">
          <Flex gap="sm" as="ul" className="hero--list">
            <SectionItem to="feed" title="Feed" />
            <SectionItem to="about" title="About" />
            <SectionItem to="friends" title="Friends" />
            <SectionItem to="photos" title="Photos" />
          </Flex>
        </nav>
      </div>
    </section>
  )
}
export default hero
