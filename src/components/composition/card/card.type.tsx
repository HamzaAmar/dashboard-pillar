// import type { ProductsModel } from "@api/ecommerce/products.type";

import type { ProductsModel } from '@api/ecommerce'

type Variant = 'horizontal' | 'vertical'

interface User {
  name: string
  avatar: string
}

export interface ProductCardProps extends ProductsModel {
  variant?: Variant
}

export interface ReviewCardProps {
  id?: string
  user: User
  rating: number
  date: Date
  review: string
}
