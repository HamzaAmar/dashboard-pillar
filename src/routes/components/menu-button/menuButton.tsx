import { Avatar, Breadcrumb, BreadcrumbItem, Button, Flex, Grid, Heading, IconButton, Text } from '@pillar-ui/core'
import { Preview } from '@components/section'
import React, { useState } from 'react'
import * as docs from './menuButton.docs'
import * as Icons from '@components/icons'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { USERS_LIST } from '@api/user/users.data'
import { Link } from 'react-router-dom'
import { formatDate } from '@utils/date'
import { getMessages } from '@api/messages'
import { MenuButton } from '@components/composition/menuButton'

const user = USERS_LIST[0]

const MenuButtonTest = () => {
  // const [state, setState] = useState<ProductSortUnion>("lowest-price");
  const [state, setState] = useState('lowest-price')

  return (
    <MenuButton
      trigger={
        <Button iconPosition="end" size="4" icon={<Icons.Caret />} variant="outline" color="b">
          Sort by
        </Button>
      }
    >
      <MenuButton.Content>
        <MenuButton.RadioGroup value={state} onValueChange={setState}>
          <MenuButton.Radio value="lowest-price">
            <Text size="3" weight={state === 'lowest-price' ? '5' : '4'}>
              Lowest Price
            </Text>
          </MenuButton.Radio>
          <MenuButton.Radio value="highest-price">
            <Text size="3" weight={state === 'highest-price' ? '5' : '4'}>
              Highest Price
            </Text>
          </MenuButton.Radio>
          <MenuButton.Radio value={'top-review'}>
            <Text size="3" weight={state === 'top-review' ? '5' : '4'}>
              Top Customers Review
            </Text>
          </MenuButton.Radio>
          <MenuButton.Radio value="recent">
            <Text size="3" weight={state === 'recent' ? '5' : '4'}>
              Most Recent
            </Text>
          </MenuButton.Radio>
        </MenuButton.RadioGroup>
      </MenuButton.Content>
    </MenuButton>
  )
}

function ProfileMenuButton() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Flex className="custom-button" as="button" items="center" gap="1">
          <Avatar title={user.name} />
          <Icons.ChevronDown width="16" />
        </Flex>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end" sideOffset={16} className="menu-button--container">
        <DropdownMenu.Group>
          <DropdownMenu.Item asChild>
            <Flex as={Link} to="pages/profile" gap="3" className="menu-button--item">
              <Avatar title={user.name} image={user.avatar} />
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
                {' '}
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

/* ============================================================================================ 
  Message Menu Button Section
   ============================================================================================ */

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
                    <Avatar image={from.avatar} title={from.name} />
                    <div className="u_flex-1">
                      <Text weight="5" size="3">
                        {from.name}
                      </Text>
                      <Text truncate="2" low color="b" size="3">
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

const MenuButtonComp = () => {
  return (
    <section aria-labelledby="menu-button--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="menu-button--page-id" size="3">
          MenuButton Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            MenuButton
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid gap="4" grid="minmax(0, 1fr) minmax(0,1fr)" className="md_grid-one">
        <Preview
          title="Radio Menu Button"
          description="Menu button has a Lot of comp one of them is radio this components is based on Radix menu button"
          code={docs.MessageMenu}
        >
          <MessageMenuButton />
        </Preview>
        <Preview
          title="Radio Menu Button"
          description="Menu button has a Lot of comp one of them is radio this components is based on Radix menu button"
          code={docs.menButtonRadio}
        >
          <MenuButtonTest />
        </Preview>
        <Preview
          style={{ justifyContent: 'flex-end' }}
          title="Radio Menu Button"
          description="Menu button has a Lot of comp one of them is radio this components is based on Radix menu button"
          code={docs.ProfileMenu}
        >
          <ProfileMenuButton />
        </Preview>
      </Grid>
    </section>
  )
}

export default MenuButtonComp
