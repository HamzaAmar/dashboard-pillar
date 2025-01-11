import { CRYPTO_CURRENCY } from '@api/crypto'
import { Button, Flex, Grid, Heading, IconButton, TableRow, Text, Table, TableColumn, Paper } from '@pillar-ui/core'
import { Card, Dots, Heart } from '@components/icons'
import { formatPrice } from '@utils/formatNumber'

const CurrencyRow = ({ name, currency, total, prices }: any) => {
  return (
    <TableRow>
      <TableColumn>
        <Heart width="16" />
      </TableColumn>
      <TableColumn>
        <Flex as="span" items="center" gap="1">
          <Text as="span" weight="5" size="4">
            {name}
          </Text>
          <Text as="span" size="1" color="b" low>
            ({currency})
          </Text>
        </Flex>
      </TableColumn>
      <TableColumn weight="5">{formatPrice({ number: prices[0].price })}</TableColumn>
      <TableColumn>
        <Text as="span" color="d" size="3" low weight="5">
          0.02%
        </Text>
      </TableColumn>
      <TableColumn>
        <Text as="span" color="su" size="3" low weight="5">
          0.15%
        </Text>
      </TableColumn>
      <TableColumn weight="5">{formatPrice({ number: total })}</TableColumn>
      <TableColumn weight="5">
        <Text size="3">{formatPrice({ number: total })}</Text>
        <Text size="3" color="b" low>
          {prices[0].price} {currency}
        </Text>
      </TableColumn>
      <TableColumn>
        <Flex gap="3" items="center">
          <Button variant="soft" icon={<Card />} size="3">
            Buy
          </Button>
          <IconButton corner="full" title="action settings" icon={<Dots />} size="4" />
        </Flex>
      </TableColumn>
    </TableRow>
  )
}

const CurrencyTable = () => {
  return (
    <Paper flow="5" as="section" style={{ overflow: 'hidden' }} className="trading-activity">
      <Flex justify="between" items="center">
        <div>
          <Heading>Recent Trading Activities</Heading>
          <Text size="3" color="b" low>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </div>
        <IconButton icon={<Dots />} title="Settings" />
      </Flex>
      <Table>
        <thead>
          <TableRow type="head">
            <TableColumn as="th">
              <Text className="u_sr-only">Like</Text>
            </TableColumn>
            <TableColumn as="th">Name</TableColumn>
            <TableColumn as="th">Price</TableColumn>
            <TableColumn as="th">Today</TableColumn>
            <TableColumn as="th">This Week</TableColumn>
            <TableColumn as="th">Market Cap</TableColumn>
            <TableColumn as="th">Volume Today</TableColumn>
            <TableColumn as="th">Actions</TableColumn>
          </TableRow>
        </thead>

        <tbody>
          {CRYPTO_CURRENCY.map((crypto) => (
            <CurrencyRow key={crypto.name} {...crypto} />
          ))}
        </tbody>
      </Table>
    </Paper>
  )
}

const HistoryCurrency = () => {
  return (
    <Flex as="section" direction="col" justify="between" className="history-section l_box l_flow-md">
      <Heading as="h2" size="3">
        History
      </Heading>
      {CRYPTO_CURRENCY.slice(0, 6).map(({ name, image, description, currency }) => (
        <Flex as="article" justify="between" key={name}>
          <Flex gap="3" items="start">
            <img src={`/images/crypto/${image}`} alt="bitcoin" width={24} height={24} />
            <div>
              <Flex gap="1" items="center">
                <Heading as="h3" size="3" weight="5">
                  {name}
                </Heading>
                <Text size="1" color="b" low>
                  ( {currency} )
                </Text>
              </Flex>
              <Text weight="7" low color="su" size="3">
                {formatPrice({ number: 20 })}
              </Text>
              <Text as="h3" weight="5" truncate="2" size="1" color="b" low>
                {description}
              </Text>
            </div>
          </Flex>
          <Text size="3" color="b" low>
            11/03
          </Text>
        </Flex>
      ))}
    </Flex>
  )
}

export const HistoryTrading = () => {
  return (
    <Grid gap="4" cols={{ default: 'minmax(1px , 1fr) 350px' }} className="history-trading-container">
      <CurrencyTable />
      <HistoryCurrency />
    </Grid>
  )
}
