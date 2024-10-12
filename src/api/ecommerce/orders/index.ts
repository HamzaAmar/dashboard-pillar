import { USERS_LIST } from '@api/user/users.data'
import { getDiscountPrice } from '@components/composition/card/cards/product'
import { getDate } from '@utils/date'
import { getRandomNumber } from '@utils/randomNumber'
import { PRODUCT_CORE } from '../products/products.data'
import { status } from './order.data'

import type { OrderModel, OrderProduct } from './orders.type'

function getRandomProduct(loop: number) {
  const products = Array.from<unknown, OrderProduct>({ length: loop }, (_, index) => {
    const productIndex = getRandomNumber({
      min: 1,
      max: PRODUCT_CORE.size,
    })

    return {
      title: PRODUCT_CORE.get(productIndex)!.title,
      price: PRODUCT_CORE.get(productIndex)!.price,
    }
  })
  return products
}

function totalPrice(products: OrderProduct[]) {
  const total = products.reduce((prev, { price }) => {
    return prev + getDiscountPrice(price.price, price.discount)
  }, 0)
  return total
}

export function getOrders() {
  const orders = Array.from<unknown, OrderModel>({ length: 100 }, (_, index) => {
    const userIndex = getRandomNumber({ min: 1, max: USERS_LIST.length })
    const statusIndex = getRandomNumber({ min: 1, max: status.length })
    const loop = getRandomNumber({ max: 5 })
    const products = getRandomProduct(loop)
    const total = totalPrice(products)

    return {
      id: `product_${index + 1}`,
      customer: {
        slug: USERS_LIST[userIndex].slug,
        name: USERS_LIST[userIndex].name,
        avatar: USERS_LIST[userIndex].avatar,
      },
      date: getDate({ days: -index }),
      status: status[statusIndex],
      products,
      total,
    }
  })

  return orders
}
