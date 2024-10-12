import { Button, Flex, Heading, Text } from '@components/core'

const Chat = () => {
  return (
    <Flex style={{ height: '100%' }} justify="center" items="center" direction="column" gap="sm">
      <Heading as="h3" size="sm">
        Chat is Empty
      </Heading>
      <Text align="center" size="sm" color="slate" contrast="low">
        Send a message or tap on the Button below To say Hello To this Contact.
      </Text>
      <Button>Say Hello</Button>
    </Flex>
  )
}

const empty = () => {
  return (
    <Flex className="sm-hide" style={{ height: '100%' }} justify="center" items="center" direction="column">
      <Heading as="h3" size="sm">
        No user Selected
      </Heading>
      <Text size="sm" color="slate" contrast="low">
        Please Select One of the user If you want to make a conversation
      </Text>
    </Flex>
  )
}

empty.Chat = Chat

export default empty
