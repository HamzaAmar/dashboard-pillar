// import type { ProductDTO } from "@api/ecommerce/products.type";

import type { ProductDTO } from '@api/ecommerce'

type Variant = 'horizontal' | 'vertical'

interface User {
  name: string
  avatar: string
}

export interface ProductCardProps extends ProductDTO {
  variant?: Variant
}

export interface ReviewCardProps {
  id?: string
  user: User
  rating: number
  date: Date
  review: string
}
