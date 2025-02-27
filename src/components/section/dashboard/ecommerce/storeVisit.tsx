import { USERS_LIST } from '@api/user/users.data'
import { Avatar, Button, Flex, Grid, Heading, IconButton, Paper, ProgressBar, Text } from '@pillar-ui/core'
import { ChevronDown, DotsHorizontal, Settings, User } from '@pillar-ui/icons'
import { StoreVisitProgressProps } from '../dashboard.type'

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
    <Grid as="section" cols={{ default: '1fr', md: '300px 1fr' }} gap="4">
      <article aria-label="user analytics">
        <Flex className="l_box" justify="center" items="center" direction="col" gap="5">
          <Avatar size="6" title={`${me.name} Profile Picture`} src={me.avatar} />
          <div className="account-settings-user-name">
            <Text weight="5" size="5">
              {me.name}
            </Text>
            <Text size="3" low color="b">
              {me.role}
            </Text>
          </div>
          <Flex justify="between" gap="6">
            <Flex items="center" justify="center" direction="col">
              <Text size="3" color="b" low>
                Sales
              </Text>
              <Text weight="6" size="4">
                34K
              </Text>
            </Flex>
            <Flex items="center" justify="center" direction="col">
              <Text size="3" color="b" low>
                Customers
              </Text>
              <Text weight="6" size="4">
                34K
              </Text>
            </Flex>
            <Flex items="center" justify="center" direction="col">
              <Text size="3" color="b" low>
                Products
              </Text>
              <Text weight="6" size="4">
                1200
              </Text>
            </Flex>
          </Flex>
          <Flex gap="3" items="center">
            <Button variant="shadow" className="fl-1" icon={<Settings />}>
              Settings
            </Button>
            <IconButton variant="text" size="4" title={`${me.name} Account Settings`} icon={<DotsHorizontal />} />
          </Flex>
        </Flex>
      </article>

      <Paper as="article" flow="5" aria-labelledby="store-visit-id" className="l_box">
        <Flex as="header" justify="between">
          <div className="u_leading__sm">
            <Heading as="h3" id="store-visit-id" size="4">
              Store Visit
            </Heading>
            <Text size="3" color="b" low>
              Detail About Your Store Visit
            </Text>
          </div>
          <IconButton variant="text" size="4" icon={<DotsHorizontal />} title="Store Visit" />
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
            <ChevronDown stroke="var(--B11)" direction="right" width={20} />
          </div>
        </Flex>
        <Paper flow="3">
          <StoreVisitProgress value={30} color="d" title="Men" />
          <StoreVisitProgress value={55} color="su" title="Women" />
          <StoreVisitProgress value={15} color="se" title="Kids" />
        </Paper>
      </Paper>
    </Grid>
  )
}
