import { CurrencyUnion, formatPrice } from './formatNumber'

interface DiscountPrice {
  price: number
  discount: number
  currency?: CurrencyUnion
}

export const getDiscountPrice = ({ price, discount, currency = 'USD' }: DiscountPrice) => {
  const realPrice = discount ? price - Math.floor(price / discount) : price
  return formatPrice({ currency, number: realPrice })
}
