export const menButtonRadio = `
import {useState} from 'react'
import  {Text, MenuButton, Button}  from '@pillar-ui/core'
import  {Caret}  from '@components/icons'

const MenuButtonComp = () => {
    const [state, setState] = useState('lowest-price')
  
    return (
      <MenuButton
        trigger={
          <Button iconPosition="end" size="4" icon={<Caret />} variant="outline" color="b">
            Sort by
          </Button>
        }
      >
        <MenuButton.Content>
          <MenuButton.RadioGroup value={state} onValueChange={setState}>
            <MenuButton.Radio value="lowest-price">
              <Text size="3" weight={state === 'lowest-price' ? 'medium' : 'normal'}>
                Lowest Price
              </Text>
            </MenuButton.Radio>
            <MenuButton.Radio value="highest-price">
              <Text size="3" weight={state === 'highest-price' ? 'medium' : 'normal'}>
                Highest Price
              </Text>
            </MenuButton.Radio>
            <MenuButton.Radio value={'top-review'}>
              <Text size="3" weight={state === 'top-review' ? 'medium' : 'normal'}>
                Top Customers Review
              </Text>
            </MenuButton.Radio>
            <MenuButton.Radio value="recent">
              <Text size="3" weight={state === 'recent' ? 'medium' : 'normal'}>
                Most Recent
              </Text>
            </MenuButton.Radio>
          </MenuButton.RadioGroup>
        </MenuButton.Content>
    </MenuButton>
    )
  }
`

export const ProfileMenu = `
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import  {Flex, Avatar, Text, MenuButton, Button}  from '@pillar-ui/core'
import  * as Icons  from '@components/icons'

function ProfileMenuButton() {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Flex className="custom-button" as="button" items="center" gap="1">
            <Avatar  title={user.name} />
            <Icons.ChevronDown width="16" />
          </Flex>
        </DropdownMenu.Trigger>
  
        <DropdownMenu.Content align="end" sideOffset={16} className="menu-button--container">
          <DropdownMenu.Group>
            <DropdownMenu.Item asChild>
              <Flex as={Link} to="pages/profile" gap="3" className="menu-button--item">
                <Avatar title={user.name}  src={user.avatar} />
                <div>
                  <Text size="4" weight="5">
                    {user.name}
                  </Text>
                  <Text color="b" low size="3">
                    {user.role}
                  </Text>
                </div>
              </Flex>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator className="menu-button--separator" />
  
          <DropdownMenu.Group>
            <DropdownMenu.Item asChild>
              <Flex gap="3" as={Link} className="menu-button--item" to="pages/profile">
                <Icons.User width="20" />
                <Text size="3" weight="5">
                  View Profile
                </Text>
              </Flex>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Flex gap="3" as={Link} className="menu-button--item" to="pages/emails">
                <Icons.Envelop width="20" />
                <Text size="3" weight="5">
                  {' '}
                  Inbox
                </Text>
              </Flex>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Flex gap="3" as={Link} className="menu-button--item" to="pages/chat">
                <Icons.Messages width="20" />
                <Text size="3" weight="5">
                  {' '}
                  Chat
                </Text>
              </Flex>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Flex gap="3" className="menu-button--item" as={Link} to="pages/todo">
                <Icons.Checkbox width="20" />
                <Text size="3" weight="5">
                  {' '}
                  Task board
                </Text>
              </Flex>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator className="menu-button--separator" />
          <DropdownMenu.Group>
            <DropdownMenu.Item asChild>
              <Flex gap="3" as={Link} className="menu-button--item" to="pages/account-settings">
                <Icons.Setting width="20" />
                <Text size="3" weight="5">
                  {' '}
                  Account Settings
                </Text>
              </Flex>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Flex gap="3" as={Link} className="menu-button--item" to="pages/faq">
                <Icons.Help width="20" />
                <Text size="3" weight="5">
                  {' '}
                  Faq
                </Text>
              </Flex>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    )
  }

`

export const MessageMenu = `
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import  {Flex, Avatar, Text, MenuButton, Button}  from '@pillar-ui/core'
import  * as Icons  from '@components/icons'

function MessageMenuButton() {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <IconButton icon={<Icons.Messages />} title="Messages" />
        </DropdownMenu.Trigger>
  
        <DropdownMenu.Content align="end" sideOffset={16} asChild>
          <section className="menu-button--container menu-button--sticky">
            <DropdownMenu.Group>
              <DropdownMenu.Item className="menu-button--item">
                <Flex as="header" items="center" justify="between">
                  <Text size="4" weight="5">
                    Message
                  </Text>
                  <Button size="3" variant="text">
                    Settings
                  </Button>
                </Flex>
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator className="menu-button--separator" />
  
            <DropdownMenu.Group className="menu-button--main l_flow-md">
              {getMessages(10).map(({ from, id, date, unread, message }) => (
                <DropdownMenu.Item asChild key={id}>
                  <Flex justify="between" className="menu-button--item">
                    <Flex gap="3">
                      <Avatar  src={from.avatar} title={from.name} />
                      <div className="u_flex-1">
                        <Text weight="5" size="3">
                          {from.name}
                        </Text>
                        <Text truncate="multiline" low color="b" numberLine={2} size="3">
                          {message}
                        </Text>
                      </div>
                    </Flex>
                    <Flex flex="none" items="end" justify="between" direction="col">
                      <Text color="b" low size="3">
                        {formatDate(date)}
                      </Text>
  
                      <Icons.Check width={12} stroke={unread ? 'currentColor' : 'var(--color-primary-3)'} />
                    </Flex>
                  </Flex>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Group>
            <DropdownMenu.Separator className="menu-button--separator" />
  
            <DropdownMenu.Group>
              <DropdownMenu.Item className="menu-button--item">
                <Button
                  size="4"
                  // className="menu-button--item"
                  variant="text"
                  fluid
                  as={Link}
                  to="pages/emails"
                >
                  View All
                </Button>
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </section>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    )
  }
`
