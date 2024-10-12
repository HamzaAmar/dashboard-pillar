import { CryptoPrice } from '@api/crypto'
import { Color } from '@type/utils'

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
