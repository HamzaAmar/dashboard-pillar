import { UserInfoNameAvatar } from '@api/user/user.type'
import { ProductsModel } from '../products/products.type'

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

export type OrderProduct = Pick<ProductsModel, 'price' | 'title'>

export interface OrderModel {
  id: string
  customer: UserInfoNameAvatar
  date: Date
  status: OrderStatusUnion
  products: OrderProduct[]
  total: number
}
