import { Layout } from '@components/common'
import { EmptyChat, Faq, Pages } from '@components/section'
import { COMPOSITE_ROUTES, CORE_ROUTES, FORMS_ROUTES } from './components'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { BarPage, LinePage, PiePage } from './pages/chart'

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/pages/ecommerce" replace />,
      },
      {
        path: 'pages',
        children: [
          {
            index: true,
            element: <Pages />,
          },
          {
            path: 'faq',
            lazy: () => import('./pages/faq'),
          },
          {
            path: 'crypto',
            async lazy() {
              let { Component } = await import('./pages/dahsboard/crypto')
              return { Component }
            },
          },
          {
            path: 'ecommerce',
            lazy: () => import('./pages/dahsboard/ecommerce'),
          },
          {
            path: 'jobs',
            lazy: () => import('./pages/dahsboard/jobs'),
          },
          {
            path: 'contact',
            lazy: () => import('./pages/dahsboard/contact'),
          },
          {
            path: 'nft',
            lazy: () => import('./pages/dahsboard/nft'),
          },
          {
            path: 'emails',
            async lazy() {
              let { InboxComponentLayout, InboxLayoutLoader } = await import('./pages/emails')
              return { Component: InboxComponentLayout, loader: InboxLayoutLoader }
            },
            children: [
              {
                index: true,
                element: <Navigate to="inbox" replace />,
              },
              { path: ':type', lazy: () => import('./pages/emails') },
            ],
          },
          {
            path: 'pricing',
            lazy: () => import('./pages/pricing'),
          },
          {
            path: 'todo',
            lazy: () => import('./pages/todo'),
          },
          {
            path: 'chat',
            async lazy() {
              let { ComponentLayout, layoutLoader } = await import('./pages/chat')
              return { Component: ComponentLayout, loader: layoutLoader }
            },
            children: [
              {
                index: true,
                element: <EmptyChat />,
              },
              { path: ':user', lazy: () => import('./pages/chat') },
            ],
          },
          {
            path: 'profile',
            lazy: () => import('./pages/profile/layout'),
            children: [
              {
                index: true,
                element: <Navigate to="feed" replace />,
              },
              { path: 'feed', lazy: () => import('./pages/profile/feed') },
              { path: 'friends', lazy: () => import('./pages/profile/friends') },
              { path: 'photos', lazy: () => import('./pages/profile/photos') },
              { path: 'about', lazy: () => import('./pages/profile/about') },
            ],
          },
          {
            path: 'register',
            lazy: () => import('./pages/authentication/register'),
          },

          {
            path: 'login',
            lazy: () => import('./pages/authentication/login'),
          },
          {
            path: 'forget-password',
            lazy: () => import('./pages/authentication/forgetPassword'),
          },
          {
            path: 'account-settings',
            lazy: () => import('./pages/settings/layout'),
            children: [
              { index: true, element: <Navigate to="personal-info" replace /> },
              { path: 'reset-password', lazy: () => import('./pages/settings/resetPassword') },
              { path: 'experience', lazy: () => import('./pages/settings/experience') },
              { path: 'personal-info', lazy: () => import('./pages/settings/personalInfo') },
              { path: 'notification', lazy: () => import('./pages/settings/notification') },
            ],
          },

          {
            path: 'notifications',
            lazy: () => import('./pages/notification'),
          },
        ],
      },
      {
        path: 'components',
        children: [
          { index: true, element: <Navigate to="/base-ui/avatar" replace /> },
          {
            path: 'base-ui',
            children: CORE_ROUTES,
          },
          {
            path: 'compose-ui',
            children: COMPOSITE_ROUTES,
          },
          {
            path: 'form',
            children: FORMS_ROUTES,
          },
          {
            path: 'form',
            children: [{ path: 'dropzone', lazy: () => import('./components/form/dropzone') }],
          },
          {
            path: 'chart',
            children: [
              {
                path: 'bar-chart',
                element: <BarPage />,
              },
              {
                path: 'pie-donut-chart',
                element: <PiePage />,
              },
              {
                path: 'line-chart',
                element: <LinePage />,
              },
            ],
          },
        ],
      },

      {
        path: 'ecommerce',
        children: [
          {
            path: 'products',
            lazy: () => import('./pages/ecommerce/products'),
          },
          {
            path: 'product-details',
            lazy: () => import('./pages/ecommerce/productDetails'),
          },
          {
            path: 'orders',
            lazy: () => import('./pages/ecommerce/orders'),
          },
          {
            path: 'customers',
            lazy: () => import('./pages/ecommerce/customers'),
          },
          {
            path: 'cart',
            lazy: () => import('./pages/ecommerce/cart'),
          },
          {
            path: 'checkout',
            lazy: () => import('./pages/ecommerce/checkout'),
          },
          {
            path: 'add-products',
            lazy: () => import('./pages/ecommerce/addProduct'),
          },
        ],
      },

      // TODO: Nested Route

      { path: 'icons', lazy: () => import('./pages/icons') },
      { path: '*', lazy: () => import('./pages/noMatch') },
    ],
  },
])
