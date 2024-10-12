import { UserModel } from '@api/user/user.type'
import { Avatar, Breadcrumb, Button, Flex, Grid, Heading, IconButton, Text } from '@components/core'
import { CirclePlus, Dots, Envelop, Eye, Info, Message, Phone, Video } from '@components/icons'
import { useLoaderData } from 'react-router-dom'
import { ContactCardProps } from './contact.type'

const Card = ({ name, email, avatar, phone }: ContactCardProps) => {
  return (
    <article className="contact-card l_box l_flow-lg">
      <Flex justify="between">
        <Flex as="header" gap="xs">
          <Avatar
            size="lg"
            // corner="sharp"
            variant="image"
            title={name}
            image={avatar}
          />
          <div className="u_leading__sm">
            <Heading weight="medium" size="xs">
              {name}
            </Heading>
            <Text size="sm" color="slate" contrast="low">
              {email}
            </Text>
            <Text weight="medium" size="sm" color="primary" contrast="low">
              {phone}
            </Text>
          </div>
        </Flex>

        <IconButton icon={<Dots />} title="more info" />
      </Flex>

      <Flex justify="between" items="center">
        <Flex gap="2xs">
          <IconButton size="lg" icon={<Phone />} title={`Voice Call ${name}`} />
          <IconButton size="lg" icon={<Message />} title={`Video Message ${name}`} />
          <IconButton size="lg" icon={<Envelop />} title={`Send Email ${name}`} />
          <IconButton size="lg" icon={<Video />} title={`Video Call ${name}`} />
          <IconButton size="lg" icon={<Eye />} title={`View  ${name} Profile `} />
        </Flex>
        <Button icon={<Info />} color="danger" variant="text" size="sm">
          Report
        </Button>
      </Flex>
    </article>
  )
}

const Contact = () => {
  const { users } = useLoaderData() as { users: UserModel[] }
  return (
    <section className="l_flow-lg">
      <Flex justify="between" items="center">
        <Heading size="xs">Manage Contact List</Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Contact
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Flex justify="end">
        <Button variant="soft" icon={<CirclePlus />}>
          New Contact
        </Button>
      </Flex>
      <Grid columns="repeat(auto-fit, minmax(310px,1fr))" gap="md">
        {users.map((user) => (
          <Card key={user.slug} {...user} />
        ))}
      </Grid>
    </section>
  )
}

export default Contact
