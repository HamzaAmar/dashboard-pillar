import { Button, Flex, IconButton, Text } from '@pillar-ui/core'
import { Avatar } from '@pillar-ui/core'
import { ChevronDown, EyeCheck, Menu, Messages, Moon, Sun } from '@pillar-ui/icons'
import { LANGUAGES } from './header.data'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { formatDate } from '@utils/date'
import useSettings from '@hooks/useSettings/useSettings'
import { Link } from 'react-router-dom'
import { getMessages } from '@api/messages'
import { SidebarDrawer } from '../sidebar/sidebar'
import NotificationMenuButton from './notificationMenu'
import Settings from '../settings'
import ProfileMenuButton from './profileMenu'

/* ============================================================================================ 
Language Menu Button Section
 ============================================================================================ */
function LanguageMenuButton() {
  const { state, changeLanguage } = useSettings()

  const languageListWithoutCurrent = LANGUAGES.filter((language) => language.slug !== state.language)

  const getCurrentLanguage = LANGUAGES.find((language) => language.slug === state.language)
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="custom-button sm-hide">
        <Flex items="center" gap="3">
          {getCurrentLanguage?.icon}
          <Text size="3" weight="5">
            {getCurrentLanguage?.title}
          </Text>
          <ChevronDown width="16" />
        </Flex>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={16} className="menu-button--container">
          <ul>
            {languageListWithoutCurrent.map(({ slug, icon, title }) => (
              <DropdownMenu.Item asChild key={slug}>
                <li className="menu-button--item">
                  <Flex items="center" as="button" onClick={changeLanguage(slug)} gap="3">
                    {icon}
                    <Text size="3" weight="5">
                      {title}
                    </Text>
                  </Flex>
                </li>
              </DropdownMenu.Item>
            ))}
          </ul>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
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
        <IconButton variant="text" icon={<Messages />} title="Messages" size="4" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end" sideOffset={16} asChild>
        <section className="menu-button--container menu-button--sticky">
          <DropdownMenu.Group>
            <DropdownMenu.Item className="menu-button--item menu-button--header">
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

          <DropdownMenu.Group className="menu-button--main">
            {getMessages(15).map(({ from, id, date, unread, message }) => (
              <DropdownMenu.Item asChild key={id}>
                <Flex data-read={unread} justify="between" items="center" gap="4" className="menu-button--item">
                  <Flex gap="3" items="center">
                    <Avatar size="4" src={from.avatar} title={from.name} />
                    <div className="fl-1">
                      <Text weight="5" size="3">
                        {from.name}
                      </Text>
                      <Text truncate="2" low color="b" size="3">
                        {message}
                      </Text>
                    </div>
                  </Flex>
                  <Flex gap="3" items="end" justify="between">
                    {!unread && <EyeCheck width={16} strokeWidth={2} stroke="var(--P9)" />}
                    <Text color="b" low size="3">
                      {formatDate(date)}
                    </Text>
                  </Flex>
                </Flex>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Group>
          <DropdownMenu.Separator className="menu-button--separator" />

          <DropdownMenu.Group>
            <DropdownMenu.Item className="menu-button--item">
              <Button size="4" variant="text" color="b" fluid as={Link} to="pages/emails">
                View All
              </Button>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </section>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

/* ============================================================================================ 
Notification Menu Button Section
 ============================================================================================ */

/* ============================================================================================ 
Header Content Section
 ============================================================================================ */

export const Header = ({ handleToggle, isShrink }: any) => {
  const { state, changeMode } = useSettings()
  const nextMode = state.mode === 'dark' ? 'light' : 'dark'
  const sidebarLabel = isShrink ? 'Expand Sidebar' : 'Shrink Sidebar'
  return (
    <Flex as="header" justify="between" items="center" className="header">
      <Flex gap="3">
        <div className="language">
          <IconButton
            className="sidebar--trigger md-hide"
            onClick={handleToggle}
            icon={<Menu />}
            title={sidebarLabel}
            size="4"
          />
          <SidebarDrawer />
        </div>
      </Flex>
      <Flex gap="3" items="center" className="header--settings">
        <IconButton
          onClick={changeMode(nextMode)}
          size="4"
          icon={state.mode === 'light' ? <Moon /> : <Sun />}
          title={`turn ${state.mode === 'dark' ? 'Off' : 'On'} dark mode ${state.mode}`}
          variant="text"
        />
        <div className="language--container">
          <LanguageMenuButton />
        </div>
        <MessageMenuButton />
        <NotificationMenuButton />
        <Settings />
        <ProfileMenuButton />
      </Flex>
    </Flex>
  )
}
