import * as Icons from '@components/icons'

const dashboardChildren = [
  { id: 'ecommerce', title: 'E_commerce', icon: <Icons.Dollar width={18} />, to: '/dashboard/ecommerce' },
  { id: 'crypto', title: 'Crypto', icon: <Icons.ReportAnalytics width={18} />, to: '/dashboard/crypto' },
  { id: 'jobs', title: 'Jobs', icon: <Icons.Users width={18} />, to: '/dashboard/jobs' },
  { id: 'contact', title: 'Contact', icon: <Icons.Phone width={18} />, to: '/dashboard/contact' },
  { id: 'nft', title: 'NFT', icon: <Icons.Users width={18} />, to: '/dashboard/nft' },
]

const pageChildren = [
  { id: 'todo', title: 'TODO', icon: <Icons.Checkbox width={18} />, to: '/pages/todo' },
  { id: 'inbox', title: 'Email', icon: <Icons.Envelop width={18} />, to: '/pages/emails' },
  { id: 'chat', title: 'Chat', icon: <Icons.Messages width={18} />, to: '/pages/chat' },
  { id: 'faq', title: 'FAQ', icon: <Icons.Help width={18} />, to: '/pages/faq' },
  { id: 'profile', title: 'Profile', icon: <Icons.UserCircle width={18} />, to: '/pages/profile' },
  { id: 'account-settings', title: 'Settings', icon: <Icons.Setting width={18} />, to: '/pages/account-settings' },
  { id: 'pricing', title: 'Pricing', icon: <Icons.Dollar width={18} />, to: '/pages/pricing' },
  { id: 'notification', title: 'Notifications', icon: <Icons.Message width={18} />, to: '/pages/notifications' },
]

const chartChildren = [
  { id: 'ecommerce', title: 'E_commerce', icon: <Icons.Dollar width={18} />, to: '/pages/ecommerce' },
  { id: 'crypto', title: 'Crypto', icon: <Icons.ReportAnalytics width={18} />, to: '/pages/crypto' },
  { id: 'jobs', title: 'Jobs', icon: <Icons.Users width={18} />, to: '/pages/jobs' },
]
const ecommerceChildren = [
  { id: 'products', title: 'Products', icon: <Icons.Dollar width={18} />, to: '/e-commerce/products' },
  {
    id: 'product-details',
    title: 'Product Details',
    icon: <Icons.FLoatLeft width={18} />,
    to: '/e-commerce/product-details',
  },
  { id: 'order', title: 'Order', icon: <Icons.HandFinger width={18} />, to: '/e-commerce/orders' },
  { id: 'cart', title: 'Cart', icon: <Icons.Cart width={18} />, to: '/e-commerce/cart' },
  { id: 'checkout', title: 'Checkout', icon: <Icons.Card width={18} />, to: '/e-commerce/checkout' },
  { id: 'add-product', title: 'Add Product', icon: <Icons.CirclePlus width={18} />, to: '/e-commerce/add-product' },
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
export const SIDEBAR_CONTENT = [
  { id: 'dashboard', title: 'Dashboard', icon: <Icons.ReportAnalytics width={18} />, children: dashboardChildren },
  { id: 'pages', title: 'Pages', icon: <Icons.Note width={18} />, children: pageChildren },
  // { id: 'chart', title: 'Chart', icon: <Icons.Chart width={18} />, children: chartChildren },
  { id: 'e-commerce', title: 'Ecommerce', icon: <Icons.Cart width={18} />, children: ecommerceChildren },
  { id: 'auth', title: 'Auth', icon: <Icons.Lock width={18} />, children: authChildren },
  { id: 'icons', title: 'Icons', icon: <Icons.CircleRefresh width={18} />, to: '/icons' },
]
