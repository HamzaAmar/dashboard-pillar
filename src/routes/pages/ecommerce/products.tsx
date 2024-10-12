import { ProductsSection } from '@components/section'
import { getProducts } from '@api/ecommerce'

import type { LoaderFunction } from 'react-router-dom'

export const loader: LoaderFunction = ({ params }) => {
  return getProducts()
}

export const Component = () => {
  return <ProductsSection />
}
