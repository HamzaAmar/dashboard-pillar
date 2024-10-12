import { getOrders } from '@api/ecommerce/orders'
import { OrdersSection } from '@components/section'
import { LoaderFunction } from 'react-router-dom'

export const loader: LoaderFunction = ({ params }) => {
  return getOrders()
}

export const Component = () => {
  return <OrdersSection />
}

Component.displayName = 'Orders Page'
