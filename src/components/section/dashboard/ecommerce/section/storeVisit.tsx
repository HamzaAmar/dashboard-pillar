import { USERS_LIST } from '@api/user/users.data'
import { Avatar, Button, Flex, Grid, Heading, IconButton, ProgressBar, Text } from '@pillar-ui/core'
import { ChevronDown, Dots, Setting, User } from '@components/icons'
import { StoreVisitProgressProps } from '../../dashboard.type'

const me = USERS_LIST[0]

const StoreVisitProgress = ({ value, title, color }: StoreVisitProgressProps) => {
  return (
    <div>
      <Flex justify="between">
        <Text color="b" low size="4">
          {title}
        </Text>
        <Text weight="5" size="4">
          {value}%
        </Text>
      </Flex>
      <ProgressBar size="6" color={color} label="women" value={value} />
    </div>
  )
}

export const StoreVisit = () => {
  return (
    <Grid as="section" grid="300px 1fr" className="sm_grid-one" gap="4">
      <article aria-label="user analytics" className="l_flow-md">
        <Flex className="l_box l_flow-md" justify="center" items="center" direction="col">
          <Avatar size="8" title={`${me.name} Profile Picture`} image={me.avatar} />
          <div className="account-settings-user-name">
            <Text weight="5"> {me.name} </Text>
            <Text size="3" low color="b">
              {me.role}
            </Text>
          </div>
          <Flex justify="between" gap="4">
            <Flex items="center" justify="center" gap="1" direction="col">
              <Text weight="5" size="4">
                34K
              </Text>
              <Text size="4" color="b" low>
                Sales
              </Text>
            </Flex>
            <Flex items="center" justify="center" gap="1" direction="col">
              <Text weight="5" size="4">
                34K
              </Text>
              <Text size="4" color="b" low>
                Customers
              </Text>
            </Flex>
            <Flex items="center" justify="center" gap="1" direction="col">
              <Text weight="5" size="4">
                1200
              </Text>
              <Text size="4" color="b" low>
                Products
              </Text>
            </Flex>
          </Flex>
          <Flex gap="3" items="center">
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
            <Heading as="h3" id="store-visit-id" size="3">
              Store Visit
            </Heading>
            <Text size="3" color="b" low>
              Detail About Your Store Visit
            </Text>
          </div>
          <IconButton icon={<Dots />} title="Store Visit" />
        </Flex>
        <Flex justify="between" items="center">
          <Flex gap="4" items="center">
            <div className="store-visit--icon-container">
              <User width="24" />
            </div>
            <div className="u_leading__sm">
              <Text transform="capitalize" size="4" weight="5">
                analytics
              </Text>
              <Text size="3" color="b" low>
                Choose analytics By Dates
              </Text>
            </div>
          </Flex>

          <div>
            <ChevronDown stroke="var(--slate-11)" direction="right" width={20} />
          </div>
        </Flex>
        <div className="l_flow-md">
          <StoreVisitProgress value={30} color="d" title="Men" />
          <StoreVisitProgress value={55} color="su" title="Women" />
          <StoreVisitProgress value={15} color="se" title="Kids" />
        </div>
      </article>
    </Grid>
  )
}
