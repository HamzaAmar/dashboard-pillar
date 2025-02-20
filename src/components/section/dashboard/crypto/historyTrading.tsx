import { CRYPTO_CURRENCY } from '@api/crypto'
import { Button, Flex, Grid, Heading, IconButton, Text, Table, Paper } from '@pillar-ui/core'
import { Cart, DotsHorizontal, Heart } from '@pillar-ui/icons'
import { formatPrice } from '@utils/formatNumber'

const CurrencyRow = ({ name, currency, total, prices }: any) => {
  return (
    <tr>
      <td>
        <Heart width="16" />
      </td>
      <td>
        <Flex as="span" items="center" gap="1">
          <Text as="span" weight="5" size="4">
            {name}
          </Text>
          <Text as="span" size="1" color="b" low>
            ({currency})
          </Text>
        </Flex>
      </td>
      <td>{formatPrice({ number: prices[0].price })}</td>
      <td>
        <Text as="span" color="d" size="3" low weight="5">
          0.02%
        </Text>
      </td>
      <td>
        <Text as="span" color="su" size="3" low weight="5">
          0.15%
        </Text>
      </td>
      <td>{formatPrice({ number: total })}</td>
      <td>
        <Text size="3">{formatPrice({ number: total })}</Text>
        <Text size="3" color="b" low>
          {prices[0].price} {currency}
        </Text>
      </td>
      <td>
        <Flex gap="3" items="center">
          <Button variant="soft" icon={<Cart />} size="3">
            Buy
          </Button>
          <IconButton corner="full" title="action settings" icon={<DotsHorizontal />} size="4" />
        </Flex>
      </td>
    </tr>
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
        <IconButton icon={<DotsHorizontal />} title="Settings" />
      </Flex>
      <Table>
        <thead>
          <tr>
            <th>
              <Text className="u_sr-only">Like</Text>
            </th>
            <th>Name</th>
            <th>Price</th>
            <th>Today</th>
            <th>This Week</th>
            <th>Market Cap</th>
            <th>Volume Today</th>
            <th>Actions</th>
          </tr>
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
    <Flex as="section" direction="col" gap="3" justify="between" className="history-section l_box">
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
