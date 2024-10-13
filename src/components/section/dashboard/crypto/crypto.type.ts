import { CryptoPrice } from '@api/crypto'
import { Color } from '@pillar-ui/core'

interface Margin {
  left: number
  top: number
  right: number
  bottom: number
}
export interface LineChartCryptoProps {
  width: number
  height: number
  color?: Color
  prices: CryptoPrice[]
  margin?: Margin
}
