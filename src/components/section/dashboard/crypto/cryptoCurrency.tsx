import { useId } from 'react'
import { RECENT_ADDED, TOP_ACCOUNT, TRENDING } from '@api/crypto'
import { Avatar, Button, Flex, Heading, Paper, Text } from '@pillar-ui/core'
import { ArrowDown, ChevronDown, CircleCheck, Clock, ThumbUp, User } from '@pillar-ui/icons'

// TODO: Remove any from the project
const CryptoItem = ({ title, icon, children }: any) => {
  const id = `feature-${useId()}`
  return (
    <Flex as="article" aria-labelledby={id} direction="col" gap="3" justify="between" className="l_box">
      <Flex className="crypto-curr--header" justify="between" items="center">
        <Flex gap="3">
          {icon}
          <Heading as="h3" id={id} weight="5" size="3">
            {title}
          </Heading>
        </Flex>
        <Button size="2" iconPosition="end" variant="soft" color="b" icon={<ChevronDown direction="right" />}>
          More
        </Button>
      </Flex>
      <Paper flow="5">{children}</Paper>
    </Flex>
  )
}

const MarketCryptoItem = ({ title, abbr, footer, image }: any) => {
  return (
    <Flex as="article" justify="between">
      <Flex gap="3" items="center">
        <img src={image} width={28} height={28} alt="bitcoin" />
        <Text size="3" weight="5">
          {title}
        </Text>
        <Text size="3" color="b" low>
          {abbr}
        </Text>
      </Flex>
      {footer}
    </Flex>
  )
}

export const CryptoCurrency = () => {
  return (
    <Paper flow="5" as="section" className="l_box">
      <div>
        <Heading as="h2">Today Featured Content</Heading>
        <Text size="3" color="b" low>
          The global crypto market cap is $809.65B, a 0.15% decrease over the last day.Read More
        </Text>
      </div>
      <div className="crypto-currency">
        <CryptoItem title="Trending" icon={<ArrowDown direction="right-top" width={20} />}>
          {TRENDING.map((trend) => (
            <MarketCryptoItem key={trend.id} {...trend} />
          ))}
        </CryptoItem>
        <CryptoItem title="Recently Added" icon={<Clock direction="right-top" width={20} />}>
          {RECENT_ADDED.map((trend) => (
            <MarketCryptoItem key={trend.id} {...trend} />
          ))}
        </CryptoItem>

        <CryptoItem title="Top Account" icon={<ThumbUp direction="right-top" width={20} />}>
          {TOP_ACCOUNT.map(({ id, title, abbr, image }) => (
            <Flex key={id} as="article" justify="between">
              <Flex gap="3" items="center">
                <Avatar src={image} size="3" title="bitcoin" />
                <div>
                  <Flex gap="1" items="center">
                    <Text size="3" weight="5">
                      {title}
                    </Text>
                    <CircleCheck width={18} fill="var(--I9)" stroke="var(--B1)" />
                  </Flex>
                  <Text size="3" color="b" low>
                    {abbr}
                  </Text>
                </div>
              </Flex>
              <Button icon={<User />} variant="soft" size="3" color="b">
                Follow
              </Button>
            </Flex>
          ))}
        </CryptoItem>
      </div>
    </Paper>
  )
}
