import { Avatar, Flex, Text } from '@pillar-ui/core'
import { Check, ChevronDown, Envelop, Help, Messages, Settings, User } from '@pillar-ui/icons'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Link } from 'react-router-dom'

const me = {
  name: 'Hamza Miloud Amar',
  role: 'Super Admin',
  avatar: '',
}

function ProfileMenuButton() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Flex className="custom-button" as="button" items="center" gap="1">
          <Avatar src="https://i.pravatar.cc/60?img=1" variant="dashed" title={me.name} size="3" />
          <ChevronDown width="16" />
        </Flex>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end" className="menu-button--container">
        <DropdownMenu.Group>
          <DropdownMenu.Item asChild>
            <Flex as={Link} to="pages/profile" gap="3" className="menu-button--item">
              <Avatar size="4" title={me.name} src={me.avatar} />
              <div>
                <Text size="3" weight="5">
                  {me.name}
                </Text>
                <Text color="b" low size="2">
                  {me.role}
                </Text>
              </div>
            </Flex>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator className="menu-button--separator" />

        <DropdownMenu.Group>
          <DropdownMenu.Item asChild>
            <Flex gap="3" as={Link} className="menu-button--item" to="pages/profile">
              <User width="20" />
              <Text size="3" weight="5">
                View Profile
              </Text>
            </Flex>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Flex gap="3" as={Link} className="menu-button--item" to="pages/emails">
              <Envelop width="20" />
              <Text size="3" weight="5">
                Inbox
              </Text>
            </Flex>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Flex gap="3" as={Link} className="menu-button--item" to="pages/chat">
              <Messages width="20" />
              <Text size="3" weight="5">
                Chat
              </Text>
            </Flex>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Flex gap="3" className="menu-button--item" as={Link} to="pages/todo">
              <Check width="20" />
              <Text size="3" weight="5">
                Task board
              </Text>
            </Flex>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <Flex gap="3" as={Link} className="menu-button--item" to="pages/account-settings">
              <Settings width="20" />
              <Text size="3" weight="5">
                Account Settings
              </Text>
            </Flex>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Flex gap="3" as={Link} className="menu-button--item" to="pages/faq">
              <Help width="20" />
              <Text size="3" weight="5">
                Faq
              </Text>
            </Flex>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default ProfileMenuButton
