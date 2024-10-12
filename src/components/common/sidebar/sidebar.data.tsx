import * as Icons from '@components/icons'

const dashboardChildren = [
  { id: 'ecommerce', title: 'E_commerce', icon: <Icons.Dollar width={20} />, to: 'pages/ecommerce' },
  { id: 'crypto', title: 'Crypto', icon: <Icons.ReportAnalytics width={20} />, to: 'pages/crypto' },
  { id: 'jobs', title: 'Jobs', icon: <Icons.Users width={20} />, to: 'pages/jobs' },
]

const pageChildren = [
  { id: 'todo', title: 'TODO', icon: <Icons.Checkbox width={20} />, to: 'pages/todo' },
  { id: 'inbox', title: 'Email', icon: <Icons.Envelop width={20} />, to: 'pages/emails' },
  { id: 'chat', title: 'Chat', icon: <Icons.Messages width={20} />, to: 'pages/chat' },
  { id: 'faq', title: 'FAQ', icon: <Icons.Help width={20} />, to: 'pages/faq' },
  { id: 'profile', title: 'Profile', icon: <Icons.UserCircle width={20} />, to: 'pages/profile' },
  { id: 'account-settings', title: 'Settings', icon: <Icons.Setting width={20} />, to: 'pages/account-settings' },
  { id: 'pricing', title: 'Pricing', icon: <Icons.Dollar width={20} />, to: 'pages/pricing' },
  { id: 'notification', title: 'Notifications', icon: <Icons.Message width={20} />, to: 'pages/notifications' },
]

const baseUIChildren = [
  { id: 'alert', title: 'Alert', icon: <Icons.Alert type="triangle" width={20} />, to: 'components/base-ui/alert' },
  { id: 'avatar', title: 'Avatar', icon: <Icons.UserCircle width={20} />, to: 'components/base-ui/avatar' },
  { id: 'badge', title: 'Badge', icon: <Icons.Billiard width={20} />, to: 'components/base-ui/badge' },
  { id: 'button', title: 'Button', icon: <Icons.HandFinger width={20} />, to: 'components/base-ui/button' },
  { id: 'layout', title: 'Layout', icon: <Icons.LayoutGrid width={20} />, to: 'components/base-ui/layout' },
  { id: 'checkbox', title: 'Checkbox', icon: <Icons.Checkbox width={20} />, to: 'components/base-ui/checkbox' },
  { id: 'typography', title: 'Typography', icon: <Icons.Writing width={20} />, to: 'components/base-ui/typography' },
  { id: 'radio', title: 'Radio', icon: <Icons.CircleDot width={20} />, to: 'components/base-ui/radio' },
  { id: 'spinner', title: 'Spinner', icon: <Icons.Loader width={20} />, to: 'components/base-ui/spinner' },
  { id: 'progress', title: 'Progress', icon: <Icons.CircleDashed width={20} />, to: 'components/base-ui/progress' },
  { id: 'toggle', title: 'Toggle', icon: <Icons.Toggle width={20} />, to: 'components/base-ui/toggle' },
  { id: 'skeleton', title: 'Skeleton', icon: <Icons.Adjustment width={20} />, to: 'components/base-ui/skeleton' },
  { id: 'slider', title: 'Slider', icon: <Icons.Users width={20} />, to: 'components/base-ui/slider' },
  { id: 'form', title: 'Form', icon: <Icons.Users width={20} />, to: 'components/base-ui/form' },
  { id: 'tooltip', title: 'Tooltip', icon: <Icons.Pointer width={20} />, to: 'components/base-ui/tooltip' },
]

const compositeChildren = [
  { id: 'accordion', title: 'Accordion', icon: <Icons.Accordion width={20} />, to: 'components/compose-ui/accordion' },
  { id: 'breadcrumb', title: 'Breadcrumb', icon: <Icons.Users width={20} />, to: 'components/compose-ui/breadcrumb' },
  { id: 'cards', title: 'Cards', icon: <Icons.Users width={20} />, to: 'components/compose-ui/cards' },
  { id: 'carousel', title: 'Carousel', icon: <Icons.Stack width={20} />, to: 'components/compose-ui/carousel' },
  {
    id: 'menu-button',
    title: 'Menu Button',
    icon: <Icons.Accordion width={20} />,
    to: 'components/compose-ui/menu-button',
  },
  { id: 'modal', title: 'Modal', icon: <Icons.BoxMargin width={20} />, to: 'components/compose-ui/modal' },
  { id: 'pagination', title: 'Pagination', icon: <Icons.Users width={20} />, to: 'components/compose-ui/pagination' },
  { id: 'status', title: 'Status', icon: <Icons.NotFound width={20} />, to: 'components/compose-ui/status' },
  { id: 'stepper', title: 'Stepper', icon: <Icons.Layer width={20} />, to: 'components/compose-ui/stepper' },
  { id: 'tab', title: 'Tab', icon: <Icons.Checkbox width={20} />, to: 'components/compose-ui/tab' },
  { id: 'table', title: 'Table', icon: <Icons.Columns width={20} />, to: 'components/compose-ui/tables' },
  { id: 'rating', title: 'Rating', icon: <Icons.Star width={20} />, to: 'components/compose-ui/rating' },
]

const formChildren = [
  { id: 'base-form', title: 'Base Form', icon: <Icons.Forms width={20} />, to: 'components/form/base-form' },
  { id: 'layout-form', title: 'Layout Form', icon: <Icons.Columns width={20} />, to: 'components/form/layout-form' },
  {
    id: 'best-practice',
    title: 'Best Practice',
    icon: <Icons.ThumbUp width={20} />,
    to: 'components/form/best-practice',
  },
  { id: 'mask-form', title: 'Mask Form', icon: <Icons.Mask width={20} />, to: 'components/form/mask-form' },
  {
    id: 'validation-form',
    title: 'Validation Form',
    icon: <Icons.CircleCheck width={20} />,
    to: 'components/form/validation-form',
  },
  { id: 'wizard-form', title: 'Wizard Form', icon: <Icons.Switches width={20} />, to: 'components/form/wizard-form' },
  { id: 'file-upload', title: 'Upload File', icon: <Icons.FileUpload width={20} />, to: 'components/form/file-upload' },
  { id: 'dropzone', title: 'Dropzone', icon: <Icons.CloudUpload width={20} />, to: 'components/form/dropzone' },
  {
    id: 'date-time-picker',
    title: 'Date Time',
    icon: <Icons.Calendar width={20} />,
    to: 'components/form/date-time-picker',
  },
  { id: 'rich-editor', title: 'Rich Editor', icon: <Icons.Code width={20} />, to: 'components/form/rich-editor' },
]

const chartChildren = [
  { id: 'ecommerce', title: 'E_commerce', icon: <Icons.Dollar width={20} />, to: 'pages/ecommerce' },
  { id: 'crypto', title: 'Crypto', icon: <Icons.ReportAnalytics width={20} />, to: 'pages/crypto' },
  { id: 'jobs', title: 'Jobs', icon: <Icons.Users width={20} />, to: 'pages/jobs' },
]
const ecommerceChildren = [
  { id: 'products', title: 'Products', icon: <Icons.Dollar width={20} />, to: 'ecommerce/products' },
  {
    id: 'product-details',
    title: 'Product Details',
    icon: <Icons.FLoatLeft width={20} />,
    to: 'ecommerce/product-details',
  },
  { id: 'order', title: 'Order', icon: <Icons.HandFinger width={20} />, to: 'ecommerce/orders' },
  { id: 'cart', title: 'Cart', icon: <Icons.Cart width={20} />, to: 'ecommerce/cart' },
  { id: 'checkout', title: 'Checkout', icon: <Icons.Card width={20} />, to: 'ecommerce/checkout' },
  { id: 'add-product', title: 'Add Product', icon: <Icons.CirclePlus width={20} />, to: 'ecommerce/add-product' },
]

const authChildren = [
  { id: 'login', title: 'Login', icon: <Icons.Dollar width={20} />, to: 'pages/login' },
  { id: 'register', title: 'Register', icon: <Icons.ReportAnalytics width={20} />, to: 'pages/register' },
  { id: 'forget-password', title: 'ForgetPassword', icon: <Icons.Users width={20} />, to: 'pages/forget-password' },
]
export const SIDEBAR_CONTENT = [
  { id: 'dashboard', title: 'Dashboard', icon: <Icons.ReportAnalytics width={20} />, children: dashboardChildren },
  { id: 'pages', title: 'Pages', icon: <Icons.Note width={20} />, children: pageChildren },
  { id: 'base-ui', title: 'BaseUI', icon: <Icons.Component width={20} />, children: baseUIChildren },
  { id: 'composition', title: 'Composition', icon: <Icons.Component width={20} />, children: compositeChildren },
  { id: 'form', title: 'Form', icon: <Icons.Checkbox width={20} />, children: formChildren },
  { id: 'chart', title: 'Chart', icon: <Icons.Chart width={20} />, children: chartChildren },
  { id: 'e-commerce', title: 'Ecommerce', icon: <Icons.Cart width={20} />, children: ecommerceChildren },
  { id: 'auth', title: 'Auth', icon: <Icons.Lock width={20} />, children: authChildren },
  { id: 'icons', title: 'Icons', icon: <Icons.CircleRefresh width={20} />, to: 'icons' },
]
