import type { ReviewModel } from '@api/posts/posts.type'
import { UserInfoNameAvatar } from '@api/user/user.type'
import type { CurrencyUnion } from '@utils/formatNumber'

interface Price {
  price: number
  currency?: CurrencyUnion
  discount?: number
}

export interface GetProductProps {
  current?: number
  pageSize?: number
}

export interface ProductCore {
  heroImage: string[]
  title: string
  description: string
  price: Price
  rating: number
  sizes: number[]
  color: string
  quantity: number
}

export interface ProductsModel extends ProductCore {
  id: string
  images?: string[]
  reviews: ReviewModel[]
  numberRating: number
  date: Date
  user: UserInfoNameAvatar
}

// export interface ProductsModel extends ProductCore {
//   id: string;
//   images?: string[];
//   reviews: ReviewModel[];
//   rating: number;
//   numberRating: number;
//   date: Date;
//   user: UserInfoNameAvatar;
// }

// export type ProductCoreProps = Record<number, ProductCore>;
