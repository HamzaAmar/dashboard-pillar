import { Link } from 'react-router-dom'
import { Flex } from '..'
import type { BreadcrumbProps, BreadcrumbItemProps } from './breadcrumb.type'
import { BreadcrumbProvider, useBreadcrumb } from './context'

/* 
======================================================================================================
Breadcrumb Item Section
======================================================================================================
*/

const Item = ({ children, link, current, size }: BreadcrumbItemProps) => {
  const context = useBreadcrumb()

  const breadcrumbSize = size ? size : context?.size ?? 'sm'

  const currentPage = current ? ({ 'aria-current': 'page' } as { 'aria-current': 'page' }) : {}
  return (
    <Flex as="li" gap="2xs" className={`breadcrumb--item breadcrumb--item__${breadcrumbSize}`}>
      <Flex as={Link} gap="2xs" items="center" {...currentPage} to={link} className="breadcrumb--link">
        {children}
      </Flex>
      {current ? null : (
        <span className="u_font-medium" role="presentation">
          {' '}
          {context?.separator ?? '>'}{' '}
        </span>
      )}
    </Flex>
  )
}

/* 
======================================================================================================
Breadcrumb Section
======================================================================================================
*/

export const Breadcrumb = ({ children, separator, size }: BreadcrumbProps) => {
  const context = { separator, size }
  return (
    <nav aria-label="Breadcrumb">
      <Flex className="breadcrumb--list" as="ol" wrap gap="2xs">
        <BreadcrumbProvider {...context}> {children}</BreadcrumbProvider>
      </Flex>
    </nav>
  )
}

Breadcrumb.Item = Item
