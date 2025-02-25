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
import { DotsHorizontal, Envelop, Eye, SquareInfo, Message, Phone, Video, Plus } from '@pillar-ui/icons'
import { useLoaderData } from 'react-router-dom'
import { ContactCardProps } from './contact.type'

const Card = ({ name, email, avatar, phone }: ContactCardProps) => {
  return (
    <Paper as="article" flow="6" className="contact-card l_box">
      <Flex justify="between" items="start">
        <Flex as="header" gap="3">
          <Avatar variant="outline" title={name} src={avatar} />
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

        <IconButton variant="text" size="4" icon={<DotsHorizontal />} title="more info" />
      </Flex>

      <Flex justify="between" items="center">
        <Flex gap="2">
          <IconButton variant="shadow" color="su" size="4" icon={<Phone />} title={`Voice Call ${name}`} />
          <IconButton color="se" size="4" icon={<Video />} title={`Video Call ${name}`} />
          <IconButton color="w" size="4" icon={<Message />} title={`Video Message ${name}`} />
          <IconButton color="p" size="4" icon={<Envelop />} title={`Send Email ${name}`} />
          <IconButton size="4" icon={<Eye />} title={`View  ${name} Profile `} />
        </Flex>
        <Button icon={<SquareInfo />} color="d" variant="text" size="4">
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
        <Heading size="6">Manage Contact List</Heading>
        <Breadcrumb>
          <BreadcrumbItem href="../../">Home</BreadcrumbItem>
          <BreadcrumbItem href="../..">Dashboard</BreadcrumbItem>
          <BreadcrumbItem href="./" current>
            Contact
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Flex justify="end">
        <Button variant="shadow" icon={<Plus />}>
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
