import { NonIndexRouteObject, RouteObject } from 'react-router-dom'

export const DOCS_LISTS = {
  forms: [
    'dropzone',
    'base-form',
    'mask-form',
    'best-practice',
    'validation-form',
    'base-form',
    'date-time-picker',
    'file-upload',
    'layout-form',
    'rich-editor',
    'wizard-form',
  ],
  composite: [
    'accordion',
    'breadcrumb',
    'cards',
    'carousel',
    'menu-button',
    'modal',
    'pagination',
    'rating',
    'status',
    'stepper',
    'tables',
    'tab',
    'timeline',
  ],
  core: [
    'alert',
    'avatar',
    'badge',
    'button',
    'checkbox',
    'form-controller',
    'layout',
    'progress',
    'radio',
    'slider',
    'skeleton',
    'spinner',
    'toggle',
    'typography',
    'tooltip',
  ],
}

export const CORE_ROUTES = DOCS_LISTS.core.map<NonIndexRouteObject>((val) => ({
  path: val,
  lazy: () => import(`./${val}`),
}))

export const COMPOSITE_ROUTES = DOCS_LISTS.composite.map<RouteObject>((val) => ({
  path: val,
  lazy: () => import(`./${val}`),
}))

export const FORMS_ROUTES = DOCS_LISTS.forms.map<RouteObject>((val) => ({
  path: val,
  lazy: () => import(`./form/${val}`),
}))

// console.log(CORE_ROUTES(), COMPOSITE_ROUTES(), FORMS_ROUTES())
