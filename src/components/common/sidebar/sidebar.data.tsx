import * as Icons from '@pillar-ui/icons'
import { ReactNode } from 'react'

const dashboardChildren = [
  { id: 'ecommerce', title: 'E_commerce', icon: <Icons.Dollar width={18} />, to: '/dashboard/ecommerce' },
  { id: 'school', title: 'School', icon: <Icons.Building width={18} />, to: '/dashboard/school' },
  { id: 'crypto', title: 'Crypto', icon: <Icons.ReportAnalytics width={18} />, to: '/dashboard/crypto' },
  { id: 'jobs', title: 'Jobs', icon: <Icons.Users width={18} />, to: '/dashboard/jobs' },
  { id: 'contact', title: 'Contact', icon: <Icons.Phone width={18} />, to: '/dashboard/contact' },
  { id: 'nft', title: 'NFT', icon: <Icons.Users width={18} />, to: '/dashboard/nft' },
  { id: 'medical', title: 'Medical', icon: <Icons.Hospital width={18} />, to: '/dashboard/medical' },
  { id: 'crm', title: 'CRM', icon: <Icons.Users width={18} />, to: '/dashboard/crm' },
  { id: 'hrm', title: 'HRM', icon: <Icons.Server width={18} />, to: '/dashboard/hrm' },
  { id: 'analytics', title: 'Analytics', icon: <Icons.ChartDot width={18} />, to: '/dashboard/analytics' },
  { id: 'fitness', title: 'Fitness', icon: <Icons.ChartDot width={18} />, to: '/dashboard/fitness' },
]

const pageChildren = [
  { id: 'todo', title: 'TODO', icon: <Icons.Checkbox width={18} />, to: '/pages/todo' },
  { id: 'inbox', title: 'Email', icon: <Icons.Envelop width={18} />, to: '/pages/emails' },
  { id: 'chat', title: 'Chat', icon: <Icons.Messages width={18} />, to: '/pages/chat' },
  { id: 'faq', title: 'FAQ', icon: <Icons.Help width={18} />, to: '/pages/faq' },
  { id: 'profile', title: 'Profile', icon: <Icons.UserCircle width={18} />, to: '/pages/profile' },
  { id: 'account-settings', title: 'Settings', icon: <Icons.Settings width={18} />, to: '/pages/account-settings' },
  { id: 'pricing', title: 'Pricing', icon: <Icons.Dollar width={18} />, to: '/pages/pricing' },
  { id: 'feedback', title: 'Feedback', icon: <Icons.Heart width={18} />, to: '/pages/feedback' },
  { id: 'timeline', title: 'Timeline', icon: <Icons.Clock width={18} />, to: '/pages/timeline' },
  { id: 'notification', title: 'Notifications', icon: <Icons.Message width={18} />, to: '/pages/notifications' },
]

const chartChildren = [
  { id: 'bar', title: 'Bar', icon: <Icons.Bar width={18} />, to: '/charts/bar' },
  { id: 'line', title: 'Line', icon: <Icons.ChartLine width={18} />, to: '/charts/line' },
  { id: 'area', title: 'Area', icon: <Icons.Area width={18} />, to: '/charts/area' },
  { id: 'pie', title: 'Pie', icon: <Icons.Pie width={18} />, to: '/charts/pie' },
  { id: 'radar', title: 'Radar', icon: <Icons.Radar width={18} />, to: '/charts/radar' },
  { id: 'mixed', title: 'Mixed', icon: <Icons.Dollar width={18} />, to: '/charts/mixed' },
  { id: 'radial', title: 'Radial', icon: <Icons.Dollar width={18} />, to: '/charts/radial' },
]
const ecommerceChildren = [
  { id: 'products', title: 'Products', icon: <Icons.Dollar width={18} />, to: '/e-commerce/products' },
  {
    id: 'product-details',
    title: 'Product Details',
    icon: <Icons.FloatLeft width={18} />,
    to: '/e-commerce/product-details',
  },
  { id: 'order', title: 'Order', icon: <Icons.HandFinger width={18} />, to: '/e-commerce/orders' },
  { id: 'cart', title: 'Cart', icon: <Icons.Cart width={18} />, to: '/e-commerce/cart' },
  { id: 'checkout', title: 'Checkout', icon: <Icons.Cart width={18} />, to: '/e-commerce/checkout' },
  { id: 'add-product', title: 'Add Product', icon: <Icons.CartAdd width={18} />, to: '/e-commerce/add-product' },
]

const authChildren = [
  { id: 'login', title: 'Login', icon: <Icons.Dollar width={18} />, to: '/auth/login' },
  { id: 'register', title: 'Register', icon: <Icons.ReportAnalytics width={18} />, to: '/auth/register' },
  {
    id: 'forget-password',
    title: 'ForgetPassword',
    icon: <Icons.Users width={18} />,
    to: '/auth/forget-password',
  },
]
export const SIDEBAR_CONTENT: SidebarItemProps[] = [
  { id: 'dashboard', title: 'Dashboard', icon: <Icons.ReportAnalytics width={18} />, children: dashboardChildren },
  { id: 'pages', title: 'Pages', icon: <Icons.Note width={18} />, children: pageChildren },
  { id: 'chart', title: 'Chart', icon: <Icons.ChartLine width={18} />, children: chartChildren },
  { id: 'e-commerce', title: 'Ecommerce', icon: <Icons.Cart width={18} />, children: ecommerceChildren },
  { id: 'auth', title: 'Auth', icon: <Icons.Lock width={18} />, children: authChildren },
]

interface SidebarItemProps {
  id: string
  title: string
  icon: ReactNode
  to?: string
  children?: SidebarItemProps[]
}
