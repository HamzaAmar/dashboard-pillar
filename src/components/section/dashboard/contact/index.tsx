import { UserModel } from '@api/user/user.type'
import { Avatar, Breadcrumb, BreadcrumbItem, Button, Flex, Grid, Heading, IconButton, Text } from '@pillar-ui/core'
import { CirclePlus, Dots, Envelop, Eye, Info, Message, Phone, Video } from '@components/icons'
import { useLoaderData } from 'react-router-dom'
import { ContactCardProps } from './contact.type'

const Card = ({ name, email, avatar, phone }: ContactCardProps) => {
  return (
    <article className="contact-card l_box l_flow-lg">
      <Flex justify="between">
        <Flex as="header" gap="3">
          <Avatar
            size="6"
            // corner="0"

            title={name}
            image={avatar}
          />
          <div className="u_leading__sm">
            <Heading weight="5" size="3">
              {name}
            </Heading>
            <Text size="4" color="b" low>
              {email}
            </Text>
            <Text weight="5" size="4" color="p" low>
              {phone}
            </Text>
          </div>
        </Flex>

        <IconButton icon={<Dots />} title="more info" />
      </Flex>

      <Flex justify="between" items="center">
        <Flex gap="1">
          <IconButton size="6" icon={<Phone />} title={`Voice Call ${name}`} />
          <IconButton size="6" icon={<Message />} title={`Video Message ${name}`} />
          <IconButton size="6" icon={<Envelop />} title={`Send Email ${name}`} />
          <IconButton size="6" icon={<Video />} title={`Video Call ${name}`} />
          <IconButton size="6" icon={<Eye />} title={`View  ${name} Profile `} />
        </Flex>
        <Button icon={<Info />} color="d" variant="text" size="4">
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
        <Heading size="3">Manage Contact List</Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Dashboard</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Contact
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Flex justify="end">
        <Button variant="soft" icon={<CirclePlus />}>
          New Contact
        </Button>
      </Flex>
      <Grid grid="repeat(auto-fit, minmax(310px,1fr))" gap="5">
        {users.map((user) => (
          <Card key={user.slug} {...user} />
        ))}
      </Grid>
    </section>
  )
}

export default Contact
