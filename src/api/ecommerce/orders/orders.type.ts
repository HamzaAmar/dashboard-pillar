import { UserInfoNameAvatar } from '@api/user/user.type'
import { ProductDTO } from '../products/products.type'

export type OrderStatusUnion =
  | 'paid'
  | 'pending'
  | 'refund'
  | 'canceled'
  | 'shipped'
  | 'complete'
  | 'partially-shipped'
  | 'awaiting-shipping'
  | 'awaiting-pickup'

export type OrderProduct = Pick<ProductDTO, 'price' | 'title'>

export interface OrderDTO {
  id: string
  customer: UserInfoNameAvatar
  date: Date
  status: OrderStatusUnion
  products: OrderProduct[]
  total: number
}
