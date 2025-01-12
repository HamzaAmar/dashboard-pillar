import { Button, Flex, Heading, Paper, Text } from '@pillar-ui/core'

const Chat = () => {
  return (
    <Paper flow="4" gap="6" height="100%" as={Flex} justify="center" items="center" direction="col">
      <Flex direction="col" items="center">
        <Heading as="h3" size="6">
          Chat is Empty
        </Heading>
        <Text align="center" size="4" color="b" low>
          Send a message or tap on the Button below To say Hello To this Contact.
        </Text>
      </Flex>
      <Button>Say Hello</Button>
    </Paper>
  )
}

const empty = () => {
  return (
    <Flex className="sm-hide" style={{ height: '100%' }} justify="center" items="center" direction="col">
      <Heading as="h3" size="4">
        No user Selected
      </Heading>
      <Text size="4" color="b" low>
        Please Select One of the user If you want to make a conversation
      </Text>
    </Flex>
  )
}

empty.Chat = Chat

export default empty
