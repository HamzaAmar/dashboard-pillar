import {
  Avatar,
  AvatarGroup,
  Breadcrumb,
  BreadcrumbItem,
  Chips,
  Flex,
  Heading,
  Paper,
  Text,
  Timeline,
  TimelineItem,
} from '@pillar-ui/core'

export const Component = () => {
  return (
    <Paper flow="7">
      <Flex justify="between" items="center">
        <Heading weight="5" size="7">
          Cart
        </Heading>
        <Breadcrumb size="5">
          <BreadcrumbItem href="../../">Home</BreadcrumbItem>
          <BreadcrumbItem href="../..">E-commerce</BreadcrumbItem>
          <BreadcrumbItem href="./" current>
            Cart
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Paper p="5">
        <Timeline color="p" line="dashed">
          <TimelineItem content="1">
            <Paper flow="6">
              <Flex justify="between" className="l_box">
                <Text weight="5">Hello world</Text>
                <Text color="b" low size="3">
                  5h ago
                </Text>
              </Flex>

              <Paper className="l_box" flow="6">
                <Text weight="5">Hello world</Text>
                <Text color="b" low>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a vel quis? Velit laudantium ea,
                  tempora in ipsam fugiat nam dolor culpa suscipit perferendis debitis ipsum ad officiis veritatis vel.
                  ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, voluptate.
                </Text>
                <Text color="b" low>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a vel quis? Velit laudantium ea,
                  tempora in ipsam fugiat nam dolor culpa suscipit perferendis debitis ipsum ad officiis veritatis vel.
                  ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, voluptate.
                </Text>
                <Flex gap="4">
                  <Chips variant="soft" color="p">
                    React
                  </Chips>
                  <Chips variant="soft" color="i">
                    CSS
                  </Chips>
                  <Chips variant="soft" color="b">
                    Nextjs
                  </Chips>
                  <Chips variant="soft" color="w">
                    HTML
                  </Chips>
                </Flex>
                <AvatarGroup size="7" corner="2" layout="grid">
                  <Avatar src="https://i.pravatar.cc/150?img=1" />
                  <Avatar src="https://i.pravatar.cc/150?img=2" />
                  <Avatar src="https://i.pravatar.cc/150?img=3" />
                </AvatarGroup>
              </Paper>
            </Paper>
          </TimelineItem>
          <TimelineItem content="2">
            <Paper flow="6">
              <Flex justify="between" className="l_box">
                <Text weight="5">Hello world</Text>
                <Text color="b" low size="3">
                  5h ago
                </Text>
              </Flex>
              <Paper className="l_box">
                <Text weight="5">Hello world</Text>
                <Text color="b" low>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a vel quis? Velit laudantium ea,
                  tempora in ipsam fugiat nam dolor culpa suscipit perferendis debitis ipsum ad officiis veritatis vel.
                  ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, voluptate.
                </Text>
              </Paper>
            </Paper>
          </TimelineItem>
          <TimelineItem content="3">
            <Paper flow="6">
              <Flex justify="between" className="l_box">
                <Text weight="5">Hello world</Text>
                <Text color="b" low size="3">
                  5h ago
                </Text>
              </Flex>
              <Paper className="l_box">
                <Text weight="5">Hello world</Text>
                <Text color="b" low>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a vel quis? Velit laudantium ea,
                  tempora in ipsam fugiat nam dolor culpa suscipit perferendis debitis ipsum ad officiis veritatis vel.
                  ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, voluptate.
                </Text>
              </Paper>
            </Paper>
          </TimelineItem>
          <TimelineItem content="4">
            <Paper flow="6">
              <Flex justify="between" className="l_box">
                <Text weight="5">Hello world</Text>
                <Text color="b" low size="3">
                  5h ago
                </Text>
              </Flex>
              <Paper className="l_box">
                <Text weight="5">Hello world</Text>
                <Text color="b" low>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a vel quis? Velit laudantium ea,
                  tempora in ipsam fugiat nam dolor culpa suscipit perferendis debitis ipsum ad officiis veritatis vel.
                  ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, voluptate.
                </Text>
              </Paper>
            </Paper>
          </TimelineItem>
        </Timeline>
      </Paper>
    </Paper>
  )
}
