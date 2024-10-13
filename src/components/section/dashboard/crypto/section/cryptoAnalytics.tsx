import { Color, Flex, Heading, Text } from '@pillar-ui/core'
import { ParentSize } from '@visx/responsive'
import { curveMonotoneX } from '@visx/curve'
import { useId, useMemo } from 'react'
import { scaleLinear, scaleTime } from '@visx/scale'
import { extent, max } from 'd3-array'
import { LinearGradient } from '@visx/gradient'
import { LinePath } from '@visx/shape'
import { CryptoCurrencyItemProps } from '../../dashboard.type'
import { CRYPTO_CURRENCY } from '@api/crypto'
import { LineChartCryptoProps } from '../crypto.type'

const colors: Record<number, Color> = {
  0: 'w',
  1: 'p',
  2: 'i',
  3: 'se',
  4: 'b',
  5: 'su',
  6: 'd',
  7: 'p',
  8: 'o',
}

const getDate = (d: any) => new Date(d.time)
const getStockValue = (d: any) => d.price

export const LineChart = ({
  width,
  height,
  color = 'p',
  prices,
  margin = { left: 0, top: 0, right: 0, bottom: 0 },
}: LineChartCryptoProps) => {
  const dateScale = useMemo(
    () =>
      scaleTime({
        range: [margin.left, width + margin.left],
        domain: extent(prices, getDate) as [Date, Date],
      }),
    [width, margin.left, prices]
  )
  const stockValueScale = useMemo(
    () =>
      scaleLinear({
        range: [height + margin.top, margin.top],
        domain: [0, (max(prices, getStockValue) || 0) + height / 3],
        nice: true,
      }),
    [margin.top, height, prices]
  )
  return (
    <svg width={width} height={height} className={`u_${color}`}>
      <LinearGradient id="area-gradient" from="var(--color-shared-8)" to="var(--color-shared-6)" />
      <LinePath
        data={prices}
        x={(d) => dateScale(getDate(d)) ?? 0}
        y={(d) => stockValueScale(getStockValue(d)) ?? 0}
        strokeWidth={2}
        stroke="var(--color-shared-9)"
        curve={curveMonotoneX}
      />
    </svg>
  )
}

const CryptoCurrencyItem = ({ color, name, image, prices, currency, total }: CryptoCurrencyItemProps) => {
  const id = `currency-${useId()}-crypto`
  return (
    <Flex as="article" aria-labelledby={id} justify="between" items="center" className="l_box u_flex-1">
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
      <ParentSize parentSizeStyles={{ width: '50%', height: '50%' }}>
        {(parent) => <LineChart prices={prices} color={color} width={parent.width} height={parent.height} />}
      </ParentSize>
    </Flex>
  )
}

export const CryptoAnalytics = () => {
  return (
    <section aria-labelledby="crypto-market-id" className="l_flow-md">
      <div>
        <Heading as="h2" id="crypto-market-id" size="3">
          Today's Cryptocurrency Prices by Market Cap
        </Heading>
        <Text size="3" color="b" low>
          The global crypto market cap is $809.65B, a 0.15% decrease over the last day.Read More
        </Text>
      </div>
      <div className="crypto-currency">
        {CRYPTO_CURRENCY.map((crypto, index) => (
          <CryptoCurrencyItem key={crypto.name} color={colors[index]} {...crypto} />
        ))}
      </div>
    </section>
  )
}
