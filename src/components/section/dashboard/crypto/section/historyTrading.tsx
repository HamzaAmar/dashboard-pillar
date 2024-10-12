import { CRYPTO_CURRENCY } from '@api/crypto'
import { Table } from '@components/composition'
import { Button, Flex, Grid, Heading, IconButton, Text } from '@components/core'
import { Card, Dots, Heart } from '@components/icons'
import { formatPrice } from '@utils/formatNumber'

const CurrencyRow = ({ name, currency, total, prices }: any) => {
  return (
    <Table.Row>
      <Table.Column>
        <Heart width="16" />
      </Table.Column>
      <Table.Column>
        <Flex as="span" items="center" gap="2xs">
          <Text as="span" weight="medium" size="sm">
            {name}
          </Text>
          <Text as="span" size="2xs" color="slate" contrast="low">
            ({currency})
          </Text>
        </Flex>
      </Table.Column>
      <Table.Column weight="medium">{formatPrice({ number: prices[0].price })}</Table.Column>
      <Table.Column>
        <Text as="span" color="red" size="xs" contrast="low" weight="medium">
          0.02%
        </Text>
      </Table.Column>
      <Table.Column>
        <Text as="span" color="green" size="xs" contrast="low" weight="medium">
          0.15%
        </Text>
      </Table.Column>
      <Table.Column weight="medium">{formatPrice({ number: total })}</Table.Column>
      <Table.Column weight="medium">
        <Text size="xs">{formatPrice({ number: total })}</Text>
        <Text size="xs" color="slate" contrast="low">
          {prices[0].price} {currency}
        </Text>
      </Table.Column>
      <Table.Column>
        <Flex gap="xs" items="center">
          <Button variant="soft" icon={<Card />} size="xs">
            Buy
          </Button>
          <IconButton corner="full" title="action settings" icon={<Dots />} size="sm" />
        </Flex>
      </Table.Column>
    </Table.Row>
  )
}

const CurrencyTable = () => {
  return (
    <section style={{ overflow: 'hidden' }} className="trading-activity l_flow-md">
      <Flex justify="between" items="center">
        <div>
          <Heading size="xs">Recent Trading Activities</Heading>
          <Text size="xs" color="slate" contrast="low">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </div>
        <IconButton icon={<Dots />} title="Settings" />
      </Flex>
      <Table>
        <thead>
          <Table.Row type="head">
            <Table.Column as="th">
              <Text className="u_sr-only">Like</Text>
            </Table.Column>
            <Table.Column as="th">Name</Table.Column>
            <Table.Column as="th">Price</Table.Column>
            <Table.Column as="th">Today</Table.Column>
            <Table.Column as="th">This Week</Table.Column>
            <Table.Column as="th">Market Cap</Table.Column>
            <Table.Column as="th">Volume Today</Table.Column>
            <Table.Column as="th">Actions</Table.Column>
          </Table.Row>
        </thead>

        <tbody>
          {CRYPTO_CURRENCY.map((crypto) => (
            <CurrencyRow key={crypto.name} {...crypto} />
          ))}
        </tbody>
      </Table>
    </section>
  )
}

const HistoryCurrency = () => {
  return (
    <Flex as="section" direction="column" justify="between" className="history-section l_box l_flow-md">
      <Heading as="h2" size="xs">
        History
      </Heading>
      {CRYPTO_CURRENCY.slice(0, 6).map(({ name, image, description, currency }) => (
        <Flex as="article" justify="between" key={name}>
          <Flex gap="xs" items="start">
            <img src={`/images/crypto/${image}`} alt="bitcoin" width={24} height={24} />
            <div>
              <Flex gap="2xs" items="center">
                <Heading as="h3" size="xs" weight="medium">
                  {name}
                </Heading>
                <Text size="3xs" color="slate" contrast="low">
                  ( {currency} )
                </Text>
              </Flex>
              <Text weight="bold" contrast="low" color="green" size="xs">
                {formatPrice({ number: 20 })}
              </Text>
              <Text as="h3" weight="medium" truncate="multiline" numberLine={2} size="2xs" color="slate" contrast="low">
                {description}
              </Text>
            </div>
          </Flex>
          <Text size="xs" color="slate" contrast="low">
            11/03
          </Text>
        </Flex>
      ))}
    </Flex>
  )
}

export const HistoryTrading = () => {
  return (
    <Grid gap="sm" columns="minmax(1px , 1fr) 350px" className="history-trading-container">
      <CurrencyTable />
      <HistoryCurrency />
    </Grid>
  )
}
