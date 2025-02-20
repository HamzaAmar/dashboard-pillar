import { getRandomNameAndAvatarUser } from '@api/user'
import { getRandomNumber } from '@utils/randomNumber'
import { getDate } from '@utils/date'
import { PRODUCT_CORE } from './products.data'

import type { ReviewModel } from '@api/posts/posts.type'
import type { GetProductProps, ProductDTO } from './products.type'
import { USERS_LIST } from '@api/user/users.data'

const CATEGORIES_LIST = ['Kids', 'Women', 'Men', 'Sport', 'Walking'] as const

// function getSizes(min = 5, max = 10) {
//   const arr: number[] = []
//   while (min <= max) {
//     const val = min
//     arr.push(val)
//     min += 0.5
//   }
//   return arr
// }

function getRandomReview() {
  const user = getRandomNameAndAvatarUser()
  const randomReview = getRandomNumber({ min: 2, max: 10 })
  const reviews = Array.from<unknown, ReviewModel>({ length: randomReview }, (_, index) => {
    return {
      id: `review-type-${index}`,
      user,
      review: 'I Like this shoes I think its one of my favorites',
      date: getDate({ days: -index }),
      rating: 4,
    }
  })
  return reviews
}

export function getProductsTotal() {
  return PRODUCT_CORE.size
}

export function getProducts({ current = 1, pageSize = 10 }: GetProductProps = {}) {
  const total = PRODUCT_CORE.size
  const next = current * pageSize
  const from = (current - 1) * pageSize
  const to = next > total ? total : next
  const length = to - from

  const products = Array.from<unknown, ProductDTO>({ length }, (_, index) => {
    const userIndex = getRandomNumber({ min: 10, max: USERS_LIST.length })
    const RatingIndex = getRandomNumber({ min: 2, max: 5 })
    const numberRatingIndex = getRandomNumber({ min: 800, max: 20000 })
    const category = getRandomNumber({ min: 0, max: 5 })
    const { name, avatar, slug } = USERS_LIST[userIndex]
    return {
      id: `product_${index + 1}`,
      ...PRODUCT_CORE.get(index + 1)!,
      rating: RatingIndex,
      numberRating: numberRatingIndex,
      reviews: getRandomReview(),
      date: getDate({ days: -index }),
      category: CATEGORIES_LIST[category],
      quantity: 10,
      user: {
        slug,
        name,
        avatar,
      },
    }
  })

  return products
}
