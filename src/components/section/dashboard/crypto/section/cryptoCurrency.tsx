import { useId } from 'react'
import { RECENT_ADDED, TOP_ACCOUNT, TRENDING } from '@api/crypto'
import { Avatar, Button, Flex, Grid, Heading, Text } from '@components/core'
import { ArrowDown, ChevronDown, CircleCheck, Clock, Like, User } from '@components/icons'

// TODO: Remove any from the project
const CryptoItem = ({ title, icon, children }: any) => {
  const id = `feature-${useId()}`
  return (
    <Flex as="article" aria-labelledby={id} direction="column" justify="between" className="l_box l_flow-sm">
      <Flex className="crypto-curr--header" justify="between" items="center">
        <Flex gap="xs">
          {icon}
          <Heading as="h3" id={id} weight="medium" size="xs">
            {title}
          </Heading>
        </Flex>
        <Button
          size="xs"
          iconPosition="end"
          variant="text"
          className="u_font-medium"
          icon={<ChevronDown direction="right" />}
        >
          More
        </Button>
      </Flex>
      <div className="l_flow-sm">{children}</div>
    </Flex>
  )
}

const MarketCryptoItem = ({ title, abbr, footer, image }: any) => {
  return (
    <Flex as="article" justify="between">
      <Flex gap="xs" items="center">
        <img src={image} width={28} height={28} alt="bitcoin" />
        <Text size="xs" weight="medium">
          {title}
        </Text>
        <Text size="xs" color="slate" contrast="low">
          {abbr}
        </Text>
      </Flex>
      {footer}
    </Flex>
  )
}

export const CryptoCurrency = () => {
  return (
    <section className="l_flow-md">
      <div>
        <Heading as="h2" size="xs">
          Today Featured Content
        </Heading>
        <Text size="xs" color="slate" contrast="low">
          The global crypto market cap is $809.65B, a 0.15% decrease over the last day.Read More
        </Text>
      </div>
      <Grid gap="sm" className="crypto-currency">
        <CryptoItem title="Trending" icon={<ArrowDown direction="right-top" width={24} />}>
          {TRENDING.map((trend) => (
            <MarketCryptoItem key={trend.id} {...trend} />
          ))}
        </CryptoItem>
        <CryptoItem title="Recently Added" icon={<Clock direction="right-top" width={24} />}>
          {RECENT_ADDED.map((trend) => (
            <MarketCryptoItem key={trend.id} {...trend} />
          ))}
        </CryptoItem>

        <CryptoItem title="Top Account" icon={<Like direction="right-top" width={24} />}>
          {TOP_ACCOUNT.map(({ id, title, abbr, image }) => (
            <Flex key={id} as="article" justify="between">
              <Flex gap="xs" items="center">
                <Avatar variant="image" image={image} width={28} height={28} size="xs" title="bitcoin" />
                <Flex gap="xs" items="start">
                  <div>
                    <Text size="xs" weight="medium">
                      {title}
                    </Text>
                    <Text size="xs" color="slate" contrast="low">
                      {abbr}
                    </Text>
                  </div>
                  <CircleCheck width={16} fill="var(--indigo-9)" stroke="var(--slate-1)" />
                </Flex>
              </Flex>
              <Button icon={<User />} variant="soft" size="xs" color="slate">
                Follow
              </Button>
            </Flex>
          ))}
        </CryptoItem>
      </Grid>
    </section>
  )
}
