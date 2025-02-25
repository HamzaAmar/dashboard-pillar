import { Layout } from '@components/common'
import { EmptyChat, Pages } from '@components/section'
import { createBrowserRouter, Navigate } from 'react-router-dom'

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/ecommerce" replace />,
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
            path: 'feedback',
            async lazy() {
              let { Component, loader } = await import('./pages/feedback')
              return { Component, loader }
            },
          },
          {
            path: 'timeline',
            lazy: () => import('./pages/timeline'),
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
        path: 'e-commerce',
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

      {
        path: 'dashboard',
        children: [
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
            path: 'crm',
            lazy: () => import('./pages/dahsboard/crm'),
          },
          {
            path: 'medical',
            lazy: () => import('./pages/dahsboard/medical'),
          },
          {
            path: 'hrm',
            lazy: () => import('./pages/dahsboard/hrm'),
          },
          {
            path: 'school',
            lazy: () => import('./pages/dahsboard/school'),
          },
          {
            path: 'analytics',
            lazy: () => import('./pages/dahsboard/analytics'),
          },
          {
            path: 'fitness',
            lazy: () => import('./pages/dahsboard/fitness'),
          },
        ],
      },

      {
        path: 'auth',
        children: [
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
        ],
      },
      {
        path: 'charts',
        children: [
          {
            path: 'bar',
            lazy: () => import('./pages/chart/bar'),
          },
          {
            path: 'line',
            lazy: () => import('./pages/chart/line'),
          },
          {
            path: 'area',
            lazy: () => import('./pages/chart/area'),
          },
          {
            path: 'pie',
            lazy: () => import('./pages/chart/pie'),
          },
          {
            path: 'radar',
            lazy: () => import('./pages/chart/radar'),
          },
          {
            path: 'mixed',
            lazy: () => import('./pages/chart/mixed'),
          },
          {
            path: 'radial',
            lazy: () => import('./pages/chart/radial'),
          },
          {
            path: 'login',
            lazy: () => import('./pages/authentication/login'),
          },

          {
            path: 'forget-password',
            lazy: () => import('./pages/authentication/forgetPassword'),
          },
        ],
      },
      // { path: '*', lazy: () => import('./pages/noMatch') },
    ],
  },
])
