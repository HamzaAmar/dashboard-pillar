import { UserModel } from '@api/user/user.type'
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
  Paper,
  Text,
} from '@pillar-ui/core'
import { CirclePlus, Dots, Envelop, Eye, Info, Message, Phone, Video } from '@components/icons'
import { useLoaderData } from 'react-router-dom'
import { ContactCardProps } from './contact.type'

const Card = ({ name, email, avatar, phone }: ContactCardProps) => {
  return (
    <Paper as="article" flow="6" className="contact-card l_box">
      <Flex justify="between" items="start">
        <Flex as="header" gap="3">
          <Avatar title={name} src={avatar} />
          <div className="u_leading__sm">
            <Heading weight="5" size="4">
              {name}
            </Heading>
            <Text size="3" color="b" low>
              {email}
            </Text>
            <Text size="3" weight="5" color="p" low>
              {phone}
            </Text>
          </div>
        </Flex>

        <IconButton icon={<Dots />} title="more info" />
      </Flex>

      <Flex justify="between" items="center">
        <Flex gap="1">
          <IconButton icon={<Phone />} title={`Voice Call ${name}`} />
          <IconButton icon={<Message />} title={`Video Message ${name}`} />
          <IconButton icon={<Envelop />} title={`Send Email ${name}`} />
          <IconButton icon={<Video />} title={`Video Call ${name}`} />
          <IconButton icon={<Eye />} title={`View  ${name} Profile `} />
        </Flex>
        <Button icon={<Info />} color="d" variant="soft" size="4">
          Report
        </Button>
      </Flex>
    </Paper>
  )
}

const Contact = () => {
  const { users } = useLoaderData() as { users: UserModel[] }
  return (
    <Paper as="section" flow="6">
      <Flex justify="between" items="center">
        <Heading size="7">Manage Contact List</Heading>
        <Breadcrumb>
          <BreadcrumbItem href="../../">Home</BreadcrumbItem>
          <BreadcrumbItem href="../..">Dashboard</BreadcrumbItem>
          <BreadcrumbItem href="./" current>
            Contact
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Flex justify="end">
        <Button variant="soft" icon={<CirclePlus />}>
          New Contact
        </Button>
      </Flex>
      <Grid cols={{ default: 'repeat(auto-fit, minmax(310px,1fr))' }} gap="5">
        {users.map((user) => (
          <Card key={user.slug} {...user} />
        ))}
      </Grid>
    </Paper>
  )
}

export default Contact
