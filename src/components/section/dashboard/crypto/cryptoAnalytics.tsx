import { Flex, Grid, Heading, Paper, Text } from '@pillar-ui/core'
import { useId } from 'react'
import { CryptoCurrencyItemProps } from '../dashboard.type'
import { CRYPTO_CURRENCY } from '@api/crypto'
import { Line, LineChart, ResponsiveContainer } from 'recharts'

const CryptoCurrencyItem = ({ color, name, image, prices, currency, total }: CryptoCurrencyItemProps) => {
  const id = `currency-${useId()}-crypto`
  return (
    <Grid cols={{ default: 'auto 1fr' }} as="article" aria-labelledby={id} gap="2" items="center" className="l_box">
      <div>
        <Flex gap="4" items="center">
          <img src={`/images/crypto/${image}`} width="36" height="36" alt={name} />
          <Heading id={id} as="h3" size="3" weight="5">
            {name}
          </Heading>
        </Flex>
        <Text size="6" weight="5">
          {prices[0].price} {currency}
        </Text>
        <Text size="4" color="b" low>
          {total} {currency}
        </Text>
      </div>
      <Paper height="100%">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }} data={prices}>
            <Line type="monotone" dataKey="price" stroke={color} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Grid>
  )
}

export const CryptoAnalytics = () => {
  return (
    <Paper flow="5" as="section" aria-labelledby="crypto-market-id" className="l_box">
      <div>
        <Heading as="h2" id="crypto-market-id">
          Today's Cryptocurrency Prices by Market Cap
        </Heading>
        <Text size="3" color="b" low>
          The global crypto market cap is $809.65B, a 0.15% decrease over the last day.
        </Text>
      </div>
      <div className="crypto-currency">
        {CRYPTO_CURRENCY.map((crypto, index) => (
          <CryptoCurrencyItem key={crypto.name} {...crypto} />
        ))}
      </div>
    </Paper>
  )
}
