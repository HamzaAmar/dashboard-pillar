import { getUsers } from '@api/user'
import { Avatar, Button, Flex, Grid, Heading, IconButton, Paper, Text } from '@pillar-ui/core'
import { Camera, DotsHorizontal, Facebook, Github, Linkdin, Settings, Twitter } from '@pillar-ui/icons'
import { NavLink, Outlet } from 'react-router-dom'

const me = getUsers()[0]

const layout = () => {
  return (
    <section aria-labelledby="settings-page-id">
      <Heading id="settings-page-id" className="u_sr-only">
        Settings Page
      </Heading>
      <header className="account-settings--cover-content">
        <div className="account-settings--cover-wrapper">
          <img className="account-settings--cover" src="/images/hero.jfif" alt="" />
        </div>
        <div className="account-settings--button">
          <Button variant="soft" color="b" icon={<Camera width="22" />}>
            Cover Image
          </Button>
        </div>
      </header>
      <Grid gap="4" cols={{ default: '240px 1fr', md: '1fr' }} className="account-settings--content">
        <div className="account-settings--sidebar">
          <section aria-labelledby="user-info">
            <Heading as="h2" id="user-info" className="u_sr-only">
              User Information And Settings
            </Heading>
            <Paper flow="3">
              <Flex
                as="article"
                aria-label="Account Analytics"
                className="l_box"
                justify="center"
                items="center"
                direction="col"
                gap="4"
              >
                <Avatar size="8" src={me.avatar} title={me.name} />
                <div className="account-settings-user-name">
                  <Text weight="5"> {me.name} </Text>
                  <Text size="3" low color="b">
                    {me.role}
                  </Text>
                </div>
                <Flex justify="around" gap="3">
                  <Flex items="center" gap="1" direction="col">
                    <Text weight="5" size="4">
                      34K
                    </Text>
                    <Text size="3" color="b" low>
                      Followers
                    </Text>
                  </Flex>
                  <Flex items="center" gap="1" direction="col">
                    <Text weight="5" size="4">
                      34K
                    </Text>
                    <Text size="3" color="b" low>
                      Following
                    </Text>
                  </Flex>
                  <Flex items="center" gap="1" direction="col">
                    <Text weight="5" size="4">
                      120
                    </Text>
                    <Text size="3" color="b" low>
                      POSTS
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap="3" items="center">
                  <Button icon={<Settings />} fluid>
                    Settings
                  </Button>
                  <IconButton title="" icon={<DotsHorizontal />} />
                </Flex>
              </Flex>
              <Paper as="article" flow="4" aria-labelledby="social-media-id" className="l_box">
                <Flex as="header" justify="between" items="center">
                  <Heading id="social-media-id" weight="5" size="1" as="h3">
                    Social Media
                  </Heading>
                  <Button size="4" variant="link">
                    Edit
                  </Button>
                </Flex>
                <Paper flow="3">
                  <Flex gap="3" items="center">
                    <Facebook width={20} />
                    <Text size="4" color="b" low>
                      @hamzaamar
                    </Text>
                  </Flex>
                  <Flex gap="3" items="center">
                    <Linkdin width={20} />
                    <Text size="4" color="b" low>
                      @hamzaamar
                    </Text>
                  </Flex>
                  <Flex gap="3" items="center">
                    <Twitter width={20} />
                    <Text size="4" color="b" low>
                      @hamzaamar123
                    </Text>
                  </Flex>
                  <Flex gap="3" items="center">
                    <Github width={20} />
                    <Text size="4" color="b" low>
                      @miloudamar93
                    </Text>
                  </Flex>
                </Paper>
              </Paper>
            </Paper>
          </section>
        </div>
        <section className="account-settings-content--section  l_box">
          <header className="account-settings-content--header">
            <nav className="account-settings-content--navigation">
              <Flex as="ul" gap="3" className="account-settings-content--list">
                <li className="account-settings-content--item">
                  <Heading as="h2">
                    <Text
                      as={NavLink}
                      weight="5"
                      size="3"
                      color="b"
                      className="account-settings-content-link"
                      to="personal-info"
                    >
                      Personal Info
                    </Text>
                  </Heading>
                </li>
                <li className="account-settings-content--item">
                  <Heading as="h2">
                    <Text
                      as={NavLink}
                      size="3"
                      color="b"
                      weight="5"
                      className="account-settings-content-link"
                      to="experience"
                    >
                      Experience
                    </Text>
                  </Heading>
                </li>
                <li className="account-settings-content--item">
                  <Heading as="h2">
                    <Text
                      as={NavLink}
                      size="3"
                      color="b"
                      weight="5"
                      className="account-settings-content-link"
                      to="reset-password"
                    >
                      Reset Password
                    </Text>
                  </Heading>
                </li>
                <li className="account-settings-content--item">
                  <Heading as="h2">
                    <Text
                      as={NavLink}
                      size="3"
                      color="b"
                      weight="5"
                      className="account-settings-content-link"
                      to="notification"
                    >
                      Notification
                    </Text>
                  </Heading>
                </li>
              </Flex>
            </nav>
          </header>
          <div className="account-settings-core">
            <Outlet />
          </div>
        </section>
      </Grid>
    </section>
  )
}

export default layout
