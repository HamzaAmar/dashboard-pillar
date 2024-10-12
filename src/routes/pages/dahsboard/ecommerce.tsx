import { getProducts } from '@api/ecommerce'
import { getUsers } from '@api/user'
import { EcommerceSection } from '@components/section'
import type { LoaderFunction } from 'react-router-dom'

export const loader: LoaderFunction = () => {
  const products = getProducts()
  const users = getUsers()
  return { products, users }
}

export const Component = () => {
  return <EcommerceSection />
}

Component.displayName = 'Ecommerce Page'
