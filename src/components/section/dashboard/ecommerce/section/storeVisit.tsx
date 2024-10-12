import { USERS_LIST } from '@api/user/users.data'
import { Avatar, Button, Flex, Grid, Heading, IconButton, ProgressBar, Text } from '@components/core'
import { ChevronDown, Dots, Setting, User } from '@components/icons'
import { StoreVisitProgressProps } from '../../dashboard.type'

const me = USERS_LIST[0]

const StoreVisitProgress = ({ value, title, color }: StoreVisitProgressProps) => {
  return (
    <div>
      <Flex justify="between">
        <Text color="slate" contrast="low" size="sm">
          {title}
        </Text>
        <Text weight="medium" size="sm">
          {value}%
        </Text>
      </Flex>
      <ProgressBar size="lg" color={color} label="women" value={value} />
    </div>
  )
}

export const StoreVisit = () => {
  return (
    <Grid as="section" columns="300px 1fr" className="sm_grid-one" gap="sm">
      <article aria-label="user analytics" className="l_flow-md">
        <Flex className="l_box l_flow-md" justify="center" items="center" direction="column">
          <Avatar size="2xl" title={`${me.name} Profile Picture`} variant="image" image={me.avatar} />
          <div className="account-settings-user-name">
            <Text weight="medium"> {me.name} </Text>
            <Text size="xs" contrast="low" color="slate">
              {me.role}
            </Text>
          </div>
          <Flex justify="between" gap="sm">
            <Flex items="center" justify="center" gap="2xs" direction="column">
              <Text weight="medium" size="sm">
                34K
              </Text>
              <Text size="sm" color="slate" contrast="low">
                Sales
              </Text>
            </Flex>
            <Flex items="center" justify="center" gap="2xs" direction="column">
              <Text weight="medium" size="sm">
                34K
              </Text>
              <Text size="sm" color="slate" contrast="low">
                Customers
              </Text>
            </Flex>
            <Flex items="center" justify="center" gap="2xs" direction="column">
              <Text weight="medium" size="sm">
                1200
              </Text>
              <Text size="sm" color="slate" contrast="low">
                Products
              </Text>
            </Flex>
          </Flex>
          <Flex gap="xs" items="center">
            <Button icon={<Setting />} fluid>
              Settings
            </Button>
            <IconButton title={`${me.name} Account Settings`} icon={<Dots />} />
          </Flex>
        </Flex>
      </article>

      <article aria-labelledby="store-visit-id" className="l_box l_flow-lg">
        <Flex as="header" justify="between">
          <div className="u_leading__sm">
            <Heading as="h3" id="store-visit-id" size="xs">
              Store Visit
            </Heading>
            <Text size="xs" color="slate" contrast="low">
              Detail About Your Store Visit
            </Text>
          </div>
          <IconButton icon={<Dots />} title="Store Visit" />
        </Flex>
        <Flex justify="between" items="center">
          <Flex gap="sm" items="center">
            <div className="store-visit--icon-container">
              <User width="24" />
            </div>
            <div className="u_leading__sm">
              <Text transform="capitalize" size="sm" weight="medium">
                analytics
              </Text>
              <Text size="xs" color="slate" contrast="low">
                Choose analytics By Dates
              </Text>
            </div>
          </Flex>

          <div>
            <ChevronDown stroke="var(--slate-11)" direction="right" width={20} />
          </div>
        </Flex>
        <div className="l_flow-md">
          <StoreVisitProgress value={30} color="danger" title="Men" />
          <StoreVisitProgress value={55} color="success" title="Women" />
          <StoreVisitProgress value={15} color="purple" title="Kids" />
        </div>
      </article>
    </Grid>
  )
}
